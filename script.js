// --- DYNAMIC SIDEBAR GENERATION ---
function generateSidebarStructure() {
    const categoryMap = new Map();
    
    // Group investment data by category
    Object.keys(investmentData).forEach(key => {
        const item = investmentData[key];
        const category = item.category;
        
        if (!categoryMap.has(category)) {
            categoryMap.set(category, []);
        }
        categoryMap.get(category).push(key);
    });
    
    // Convert to sidebar structure format
    const sidebarStructure = [];
    categoryMap.forEach((subcategories, categoryName) => {
        const key = categoryName.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
        sidebarStructure.push({
            key: key,
            name: categoryName,
            subcategories: subcategories
        });
    });
    
    return sidebarStructure;
}

const sidebarStructure = generateSidebarStructure();

// --- DOM ELEMENTS ---
const sidebar = document.getElementById('sidebar');
const contentEl = document.getElementById('content');
const breadcrumbEl = document.getElementById('breadcrumb');
const breadcrumbCounter = document.getElementById('breadcrumb-counter');
const riskFilter = document.getElementById('risk-filter');
const liquidityFilter = document.getElementById('liquidity-filter');
const resetBtn = document.getElementById('reset-filters');
const modal = document.getElementById('investmentModal');
const closeBtn = document.getElementsByClassName('close')[0];

// --- APP STATE ---
let allInvestments = [];
let currentViewInvestments = [];
let currentCategoryInvestments = []; // Track the parent category for subcategory counters
let sortState = { key: 'name', direction: 'asc' };

// --- DATA PREPARATION ---
function flattenAllInvestments() {
    const flatList = [];
    sidebarStructure.forEach(cat => {
        cat.subcategories.forEach(subKey => {
            if (investmentData[subKey] && investmentData[subKey].investments) {
                investmentData[subKey].investments.forEach(inv => {
                    flatList.push({
                        ...inv,
                        category: cat.name,
                        subcategory: investmentData[subKey].title
                    });
                });
            }
        });
    });
    return flatList;
}

function populateFilters() {
    const risks = [...new Set(allInvestments.map(i => i.risk))];
    const liquidities = [...new Set(allInvestments.map(i => i.liquidity))];
    
    risks.sort().forEach(r => riskFilter.innerHTML += `<option value="${r}">${r}</option>`);
    liquidities.sort().forEach(l => liquidityFilter.innerHTML += `<option value="${l}">${l}</option>`);
}

// --- SIDEBAR LOGIC ---
function buildSidebar() {
    const viewAllBtn = document.createElement('div');
    viewAllBtn.className = 'sidebar-action';
    viewAllBtn.textContent = 'View All Investments';
    viewAllBtn.onclick = showAllInvestments;
    sidebar.appendChild(viewAllBtn);

    sidebarStructure.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';

        const headerButton = document.createElement('button');
        headerButton.className = 'category-header';
        headerButton.onclick = () => toggleCategory(category.key, headerButton);
        headerButton.innerHTML = `${category.name} <span class="arrow">▶</span>`;

        const subcategoryList = document.createElement('div');
        subcategoryList.className = 'subcategory-list';
        subcategoryList.id = category.key;

        category.subcategories.forEach(subKey => {
            const subData = investmentData[subKey];
            if (subData) {
                const subcategoryItem = document.createElement('div');
                subcategoryItem.className = 'subcategory';
                subcategoryItem.textContent = subData.title;
                subcategoryItem.onclick = (event) => {
                     event.stopPropagation();
                     showInvestmentsForSubcategory(subKey, subcategoryItem);
                };
                subcategoryList.appendChild(subcategoryItem);
            }
        });

        categoryDiv.appendChild(headerButton);
        categoryDiv.appendChild(subcategoryList);
        sidebar.appendChild(categoryDiv);
    });
}

function toggleCategory(categoryKey, headerButton) {
    const subcategoryList = document.getElementById(categoryKey);
    const arrow = headerButton.querySelector('.arrow');
    
    const isActive = subcategoryList.classList.contains('active');
    
    // Close all others
    document.querySelectorAll('.subcategory-list.active').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.category-header.active').forEach(h => h.classList.remove('active'));
    document.querySelectorAll('.arrow.rotated').forEach(a => a.classList.remove('rotated'));

    if (!isActive) {
        subcategoryList.classList.add('active');
        headerButton.classList.add('active');
        arrow.classList.add('rotated');
    }
    
    showInvestmentsForCategory(categoryKey);
}

// --- COUNTER LOGIC ---
function updateBreadcrumbCounter() {
    const currentCount = currentViewInvestments.length;
    
    // If we're in a subcategory, show count relative to parent category
    if (currentCategoryInvestments.length > 0 && currentCategoryInvestments.length !== allInvestments.length) {
        const categoryCount = currentCategoryInvestments.length;
        breadcrumbCounter.textContent = `${currentCount} of ${categoryCount}`;
    } else {
        // Otherwise show count relative to all investments
        const totalCount = allInvestments.length;
        breadcrumbCounter.textContent = `${currentCount} of ${totalCount}`;
    }
}

// --- DISPLAY LOGIC ---
function showAllInvestments() {
    breadcrumbEl.querySelector('span').textContent = 'All Investments';
    currentViewInvestments = [...allInvestments];
    currentCategoryInvestments = [...allInvestments]; // Reset to all investments
    updateBreadcrumbCounter();
    resetFilters();
    // No need to call applyAndRender, resetFilters does it.
}

function showInvestmentsForCategory(categoryKey) {
    const category = sidebarStructure.find(c => c.key === categoryKey);
    if (!category) return;
    
    document.querySelectorAll('.subcategory.selected').forEach(s => s.classList.remove('selected'));
    breadcrumbEl.querySelector('span').textContent = category.name;
    currentViewInvestments = allInvestments.filter(inv => inv.category === category.name);
    currentCategoryInvestments = [...currentViewInvestments]; // Store category investments for subcategory reference
    updateBreadcrumbCounter();
    applyAndRender();
}

function showInvestmentsForSubcategory(subcategoryKey, element) {
    document.querySelectorAll('.subcategory.selected').forEach(s => s.classList.remove('selected'));
    element.classList.add('selected');

    const data = investmentData[subcategoryKey];
    if (!data) return;

    breadcrumbEl.querySelector('span').textContent = data.breadcrumb;
    currentViewInvestments = allInvestments.filter(inv => inv.subcategory === data.title);
    updateBreadcrumbCounter();
    applyAndRender();
}

// --- FILTER & SORT LOGIC ---
function applyAndRender() {
    let filtered = [...currentViewInvestments];

    // Apply filters
    const riskVal = riskFilter.value;
    const liquidityVal = liquidityFilter.value;

    if (riskVal !== 'all') {
        filtered = filtered.filter(i => i.risk === riskVal);
    }
    if (liquidityVal !== 'all') {
        filtered = filtered.filter(i => i.liquidity === liquidityVal);
    }

    // Apply sorting
    sortData(filtered, sortState.key, sortState.direction);

    renderTable(filtered);
}

function sortData(data, key, direction) {
    const riskOrder = ['Very Low', 'Low', 'Low-Medium', 'Medium', 'Medium-High', 'High', 'Very High', 'Extremely High'];
    const liquidityOrder = ['Very Low', 'Low', 'Low-Medium', 'Medium', 'Medium-High', 'High', 'Very High'];

    data.sort((a, b) => {
        let valA = a[key];
        let valB = b[key];

        // Custom sort for risk and liquidity
        if (key === 'risk') {
            valA = riskOrder.indexOf(valA);
            valB = riskOrder.indexOf(valB);
        } else if (key === 'liquidity') {
            valA = liquidityOrder.indexOf(valA);
            valB = liquidityOrder.indexOf(valB);
        } else if (key === 'minInvestment') {
            // A simple numeric sort for investment amounts
            valA = parseFloat(valA.replace(/[^0-9.-]+/g,"")) || 0;
            valB = parseFloat(valB.replace(/[^0-9.-]+/g,"")) || 0;
        }

        if (valA < valB) return direction === 'asc' ? -1 : 1;
        if (valA > valB) return direction === 'asc' ? 1 : -1;
        return 0;
    });
}

function handleSort(key) {
    if (sortState.key === key) {
        sortState.direction = sortState.direction === 'asc' ? 'desc' : 'asc';
    } else {
        sortState.key = key;
        sortState.direction = 'asc';
    }
    applyAndRender();
}

function resetFilters() {
    riskFilter.value = 'all';
    liquidityFilter.value = 'all';
    applyAndRender();
}

// --- MODAL FUNCTIONALITY ---
function openModal(investment) {
    document.getElementById('modalTitle').textContent = investment.name;
    document.getElementById('modalIcon').textContent = investment.icon;
    document.getElementById('modalDescription').textContent = investment.description;
    document.getElementById('modalReturn').textContent = investment.expectedReturn;
    document.getElementById('modalRisk').textContent = investment.risk;
    document.getElementById('modalLiquidity').textContent = investment.liquidity;
    document.getElementById('modalMinInvestment').textContent = investment.minInvestment;
    document.getElementById('modalCategory').textContent = `${investment.category} > ${investment.subcategory}`;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// --- RENDERING ---
function renderTable(investments) {
    const tableHTML = `
        <table>
            <thead>
                <tr>
                    <th class="sortable" data-sort-key="name">Name <span class="sort-arrow"></span></th>
                    <th>Category</th>
                    <th class="sortable" data-sort-key="risk">Risk Level <span class="sort-arrow"></span></th>
                    <th class="sortable" data-sort-key="liquidity">Liquidity <span class="sort-arrow"></span></th>
                    <th class="sortable" data-sort-key="minInvestment">Min. Investment <span class="sort-arrow"></span></th>
                </tr>
            </thead>
            <tbody>
                ${investments.map((inv, index) => `
                    <tr data-index="${index}">
                        <td>${inv.name}</td>
                        <td>${inv.subcategory}</td>
                        <td>${inv.risk}</td>
                        <td>${inv.liquidity}</td>
                        <td>${inv.minInvestment}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    contentEl.innerHTML = tableHTML;
    
    // Update sort arrows
    document.querySelectorAll('th.sortable').forEach(th => {
        const key = th.dataset.sortKey;
        const arrow = th.querySelector('.sort-arrow');
        if (key === sortState.key) {
            arrow.textContent = sortState.direction === 'asc' ? '▲' : '▼';
            arrow.style.opacity = 1;
        } else {
            arrow.textContent = '▲';
            arrow.style.opacity = 0.3;
        }
    });
    
    // Re-attach listeners to new header
    document.querySelectorAll('th.sortable').forEach(th => {
        th.onclick = () => handleSort(th.dataset.sortKey);
    });
    
    // Add click listeners to table rows
    document.querySelectorAll('tbody tr').forEach((row, index) => {
        row.onclick = () => openModal(investments[index]);
    });
}


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    allInvestments = flattenAllInvestments();
    currentViewInvestments = [...allInvestments];
    
    buildSidebar();
    populateFilters();
    updateBreadcrumbCounter();
    applyAndRender();

    riskFilter.addEventListener('change', applyAndRender);
    liquidityFilter.addEventListener('change', applyAndRender);
    resetBtn.addEventListener('click', showAllInvestments);
    
    // Modal event listeners
    closeBtn.onclick = closeModal;
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Close modal on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});