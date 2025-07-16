// Allocation data for major investors and strategies
const allocationData = [
    {
        name: "Norway Sovereign Wealth Fund",
        type: "Sovereign Wealth Fund",
        allocations: {
            "Equities": 70,
            "Fixed Income & Debt": 27,
            "Real Estate": 3,
            "Commodities & Resources": 0,
            "Alternative Investments": 0,
            "Digital Assets": 0,
            "Derivatives": 0,
            "Cash & Cash Equivalents": 0
        },
        notes: "World's largest sovereign wealth fund with $1.4T+ AUM. Highly transparent with focus on public markets and ESG."
    },
    {
        name: "Singapore GIC",
        type: "Sovereign Wealth Fund",
        allocations: {
            "Equities": 39,
            "Fixed Income & Debt": 32,
            "Real Estate": 11,
            "Commodities & Resources": 4,
            "Alternative Investments": 10,
            "Digital Assets": 0,
            "Derivatives": 2,
            "Cash & Cash Equivalents": 2
        },
        notes: "Manages Singapore's foreign reserves with 20-year+ investment horizon. Heavy focus on developed markets and alternatives."
    },
    {
        name: "Abu Dhabi Investment Authority",
        type: "Sovereign Wealth Fund",
        allocations: {
            "Equities": 32,
            "Fixed Income & Debt": 20,
            "Real Estate": 10,
            "Commodities & Resources": 8,
            "Alternative Investments": 25,
            "Digital Assets": 1,
            "Derivatives": 2,
            "Cash & Cash Equivalents": 2
        },
        notes: "One of the world's largest SWFs (~$700B+ AUM). Diversified across geographies with significant alternatives allocation."
    },
    {
        name: "Harvard Management Company",
        type: "University Endowment",
        allocations: {
            "Equities": 25,
            "Fixed Income & Debt": 11,
            "Real Estate": 9,
            "Commodities & Resources": 3,
            "Alternative Investments": 50,
            "Digital Assets": 0,
            "Derivatives": 1,
            "Cash & Cash Equivalents": 1
        },
        notes: "Harvard's $50B+ endowment pioneered the 'endowment model' with heavy alternatives allocation for illiquidity premium."
    },
    {
        name: "Yale Endowment",
        type: "University Endowment",
        allocations: {
            "Equities": 23,
            "Fixed Income & Debt": 8,
            "Real Estate": 11,
            "Commodities & Resources": 3,
            "Alternative Investments": 54,
            "Digital Assets": 0,
            "Derivatives": 0,
            "Cash & Cash Equivalents": 1
        },
        notes: "David Swensen's legendary endowment model. Minimal bonds, heavy alternatives, long-term illiquid investments."
    },
    {
        name: "Stanford Management Company",
        type: "University Endowment",
        allocations: {
            "Equities": 31,
            "Fixed Income & Debt": 4,
            "Real Estate": 12,
            "Commodities & Resources": 7,
            "Alternative Investments": 44,
            "Digital Assets": 0,
            "Derivatives": 1,
            "Cash & Cash Equivalents": 1
        },
        notes: "Stanford's $37B+ endowment with Silicon Valley venture capital expertise. Heavy private equity and VC allocation."
    },
    {
        name: "CalPERS",
        type: "Pension Fund",
        allocations: {
            "Equities": 50,
            "Fixed Income & Debt": 28,
            "Real Estate": 13,
            "Commodities & Resources": 1,
            "Alternative Investments": 8,
            "Digital Assets": 0,
            "Derivatives": 0,
            "Cash & Cash Equivalents": 0
        },
        notes: "California's $440B+ pension fund. Conservative allocation due to liability-driven investing and political constraints."
    },
    {
        name: "Ontario Teachers' Pension",
        type: "Pension Fund",
        allocations: {
            "Equities": 45,
            "Fixed Income & Debt": 26,
            "Real Estate": 11,
            "Commodities & Resources": 3,
            "Alternative Investments": 12,
            "Digital Assets": 0,
            "Derivatives": 2,
            "Cash & Cash Equivalents": 1
        },
        notes: "Canada's $250B+ pension with innovative approach to alternatives. Strong infrastructure and private equity programs."
    },
    {
        name: "Warren Buffett / Berkshire Hathaway",
        type: "Legendary Investor",
        allocations: {
            "Equities": 89,
            "Fixed Income & Debt": 0,
            "Real Estate": 2,
            "Commodities & Resources": 3,
            "Alternative Investments": 1,
            "Digital Assets": 0,
            "Derivatives": 0,
            "Cash & Cash Equivalents": 5
        },
        notes: "The Oracle of Omaha's concentrated equity approach. Minimal diversification, maximum conviction in American businesses."
    },
    {
        name: "60/40 Portfolio",
        type: "Classic Strategy",
        allocations: {
            "Equities": 60,
            "Fixed Income & Debt": 40,
            "Real Estate": 0,
            "Commodities & Resources": 0,
            "Alternative Investments": 0,
            "Digital Assets": 0,
            "Derivatives": 0,
            "Cash & Cash Equivalents": 0
        },
        notes: "The traditional balanced portfolio. Simple, liquid, tax-efficient. Dominated institutional investing for decades."
    },
    {
        name: "Target Date 2050 Fund",
        type: "Lifecycle Strategy",
        allocations: {
            "Equities": 81,
            "Fixed Income & Debt": 16,
            "Real Estate": 0,
            "Commodities & Resources": 0,
            "Alternative Investments": 0,
            "Digital Assets": 0,
            "Derivatives": 0,
            "Cash & Cash Equivalents": 3
        },
        notes: "Vanguard's target date approach for young investors. High equity allocation that decreases as retirement approaches."
    },
    {
        name: "Ray Dalio's All Weather",
        type: "Risk Parity Strategy",
        allocations: {
            "Equities": 30,
            "Fixed Income & Debt": 40,
            "Real Estate": 0,
            "Commodities & Resources": 15,
            "Alternative Investments": 10,
            "Digital Assets": 0,
            "Derivatives": 5,
            "Cash & Cash Equivalents": 0
        },
        notes: "Bridgewater's risk parity approach. Equal risk contribution from each asset class rather than equal dollar amounts."
    }
];

// Color mapping for asset classes
const colorMap = {
    "Equities": "#0066cc",
    "Fixed Income & Debt": "#28a745",
    "Real Estate": "#fd7e14",
    "Commodities & Resources": "#6f42c1",
    "Alternative Investments": "#e83e8c",
    "Digital Assets": "#20c997",
    "Derivatives": "#6c757d",
    "Cash & Cash Equivalents": "#ffc107"
};

// Function to create allocation bar chart
function createAllocationChart(allocations) {
    let chartHTML = '<div class="allocation-chart">';
    
    Object.entries(allocations).forEach(([assetClass, percentage]) => {
        if (percentage > 0) {
            const colorClass = assetClass.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
            chartHTML += `
                <div class="allocation-bar">
                    <div class="allocation-label">${assetClass}</div>
                    <div class="allocation-visual">
                        <div class="allocation-fill ${colorClass}" style="width: ${percentage}%"></div>
                    </div>
                    <div class="allocation-percentage">${percentage}%</div>
                </div>
            `;
        }
    });
    
    chartHTML += '</div>';
    return chartHTML;
}

// Function to create investor card
function createInvestorCard(investor) {
    return `
        <div class="investor-card">
            <div class="investor-header">
                <div class="investor-name">${investor.name}</div>
                <div class="investor-type">${investor.type}</div>
            </div>
            ${createAllocationChart(investor.allocations)}
            <div class="investor-notes">${investor.notes}</div>
        </div>
    `;
}

// Function to animate bars
function animateBars() {
    const fills = document.querySelectorAll('.allocation-fill');
    fills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => {
            fill.style.width = width;
        }, 100);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const investorGrid = document.getElementById('investorGrid');
    
    // Create cards for all investors
    allocationData.forEach(investor => {
        investorGrid.innerHTML += createInvestorCard(investor);
    });
    
    // Animate bars after a brief delay
    setTimeout(() => {
        animateBars();
    }, 300);
});