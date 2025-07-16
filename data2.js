// Investment data structure
const investmentData = {
    // Equities
    'public-stocks': {
        title: 'Public Stocks',
        category: 'Equities',
        breadcrumb: 'Equities > Public Stocks',
        investments: [
            {
                name: 'Large Cap Stocks',
                icon: 'LC',
                description: 'Stocks of companies with market capitalizations over $10 billion',
                expectedReturn: '8-12%',
                risk: 'Medium',
                liquidity: 'High',
                minInvestment: '$1'
            },
            {
                name: 'Small Cap Stocks',
                icon: 'SC',
                description: 'Stocks of companies with market capitalizations under $2 billion',
                expectedReturn: '10-15%',
                risk: 'High',
                liquidity: 'Medium',
                minInvestment: '$1'
            }
        ]
    },
    'mutual-funds': {
        title: 'Mutual Funds',
        category: 'Equities',
        breadcrumb: 'Equities > Mutual Funds',
        investments: [
            {
                name: 'Index Funds',
                icon: 'IDX',
                description: 'Funds that track a specific market index',
                expectedReturn: '7-11%',
                risk: 'Medium',
                liquidity: 'High',
                minInvestment: '$1-$3,000'
            }
        ]
    },
    'etfs': {
        title: 'ETFs',
        category: 'Equities',
        breadcrumb: 'Equities > ETFs',
        investments: [
            {
                name: 'Broad Market ETFs',
                icon: 'BRD',
                description: 'ETFs tracking entire stock market indices',
                expectedReturn: '8-11%',
                risk: 'Medium',
                liquidity: 'Very High',
                minInvestment: '$1'
            }
        ]
    },
    'reits': {
        title: 'REITs',
        category: 'Equities',
        breadcrumb: 'Equities > REITs',
        investments: [
            {
                name: 'Equity REITs',
                icon: 'EQR',
                description: 'REITs that own and operate income-producing real estate',
                expectedReturn: '8-12%',
                risk: 'Medium',
                liquidity: 'High',
                minInvestment: '$1'
            }
        ]
    },
    'private-equity': {
        title: 'Private Equity',
        category: 'Equities',
        breadcrumb: 'Equities > Private Equity',
        investments: [
            {
                name: 'Buyout Funds',
                icon: 'BO',
                description: 'Funds that acquire and improve mature companies',
                expectedReturn: '12-20%',
                risk: 'High',
                liquidity: 'Very Low',
                minInvestment: '$250k-$1M+'
            }
        ]
    },
    'venture-capital': {
        title: 'Venture Capital',
        category: 'Equities',
        breadcrumb: 'Equities > Venture Capital',
        investments: [
            {
                name: 'Seed Stage VC',
                icon: 'SED',
                description: 'Early-stage investments in startup companies',
                expectedReturn: '20-40%',
                risk: 'Extremely High',
                liquidity: 'Very Low',
                minInvestment: '$1M+'
            }
        ]
    },
    'angel-investing': {
        title: 'Angel Investing',
        category: 'Equities',
        breadcrumb: 'Equities > Angel Investing',
        investments: [
            {
                name: 'Individual Angel Deals',
                icon: 'IND',
                description: 'Direct investment in individual startups',
                expectedReturn: '0-100%',
                risk: 'Extremely High',
                liquidity: 'Very Low',
                minInvestment: '$1k-$25k'
            }
        ]
    },

    // Fixed Income & Debt
    'government-bonds': {
        title: 'Government Bonds',
        category: 'Fixed Income & Debt',
        breadcrumb: 'Fixed Income & Debt > Government Bonds',
        investments: [
            {
                name: 'U.S. Treasury Bonds',
                icon: 'USB',
                description: 'Long-term debt securities issued by the U.S. government',
                expectedReturn: '3-5%',
                risk: 'Very Low',
                liquidity: 'High',
                minInvestment: '$100'
            }
        ]
    },
    'corporate-bonds': {
        title: 'Corporate Bonds',
        category: 'Fixed Income & Debt',
        breadcrumb: 'Fixed Income & Debt > Corporate Bonds',
        investments: [
            {
                name: 'Investment Grade Bonds',
                icon: 'IG',
                description: 'Bonds from companies with high credit ratings',
                expectedReturn: '3-6%',
                risk: 'Low-Medium',
                liquidity: 'High',
                minInvestment: '$1,000'
            }
        ]
    },
    'municipal-bonds': {
        title: 'Municipal Bonds',
        category: 'Fixed Income & Debt',
        breadcrumb: 'Fixed Income & Debt > Municipal Bonds',
        investments: [
            {
                name: 'General Obligation Bonds',
                icon: 'GO',
                description: 'Bonds backed by the full faith and credit of municipality',
                expectedReturn: '2-5%',
                risk: 'Low',
                liquidity: 'Medium-High',
                minInvestment: '$1,000'
            }
        ]
    },
    'peer-to-peer': {
        title: 'Peer-to-Peer Lending',
        category: 'Fixed Income & Debt',
        breadcrumb: 'Fixed Income & Debt > Peer-to-Peer Lending',
        investments: [
            {
                name: 'Personal Loans P2P',
                icon: 'P2P',
                description: 'Lending money directly to individuals',
                expectedReturn: '5-12%',
                risk: 'Medium-High',
                liquidity: 'Low',
                minInvestment: '$25'
            }
        ]
    },
    'high-yield-debt': {
        title: 'High Yield Debt',
        category: 'Fixed Income & Debt',
        breadcrumb: 'Fixed Income & Debt > High Yield Debt',
        investments: [
            {
                name: 'Junk Bonds',
                icon: 'JNK',
                description: 'High-yield, high-risk corporate bonds',
                expectedReturn: '6-12%',
                risk: 'High',
                liquidity: 'Medium',
                minInvestment: '$1,000'
            }
        ]
    },
    'convertible-bonds': {
        title: 'Convertible Bonds',
        category: 'Fixed Income & Debt',
        breadcrumb: 'Fixed Income & Debt > Convertible Bonds',
        investments: [
            {
                name: 'Vanilla Convertibles',
                icon: 'VAN',
                description: 'Standard convertible bonds with equity upside',
                expectedReturn: '4-10%',
                risk: 'Medium',
                liquidity: 'Medium',
                minInvestment: '$1,000'
            }
        ]
    },

    // Real Estate
    'residential': {
        title: 'Residential',
        category: 'Real Estate',
        breadcrumb: 'Real Estate > Residential',
        investments: [
            {
                name: 'Single Family Rentals',
                icon: 'SFR',
                description: 'Individual houses rented to tenants',
                expectedReturn: '8-15%',
                risk: 'Medium',
                liquidity: 'Low',
                minInvestment: '$50k-$500k'
            }
        ]
    },
    'commercial': {
        title: 'Commercial',
        category: 'Real Estate',
        breadcrumb: 'Real Estate > Commercial',
        investments: [
            {
                name: 'Office Buildings',
                icon: 'OFF',
                description: 'Office spaces and corporate buildings',
                expectedReturn: '6-12%',
                risk: 'Medium-High',
                liquidity: 'Low',
                minInvestment: '$1M+'
            }
        ]
    },
    'industrial': {
        title: 'Industrial',
        category: 'Real Estate',
        breadcrumb: 'Real Estate > Industrial',
        investments: [
            {
                name: 'Warehouses',
                icon: 'WHS',
                description: 'Storage and distribution facilities',
                expectedReturn: '8-14%',
                risk: 'Medium',
                liquidity: 'Low',
                minInvestment: '$1M+'
            }
        ]
    },
    'development': {
        title: 'Development',
        category: 'Real Estate',
        breadcrumb: 'Real Estate > Development',
        investments: [
            {
                name: 'Ground-Up Development',
                icon: 'GUD',
                description: 'Building new properties from scratch',
                expectedReturn: '15-30%',
                risk: 'Very High',
                liquidity: 'Very Low',
                minInvestment: '$100k+'
            }
        ]
    },
    'real-estate-funds': {
        title: 'Real Estate Funds',
        category: 'Real Estate',
        breadcrumb: 'Real Estate > Real Estate Funds',
        investments: [
            {
                name: 'Real Estate Mutual Funds',
                icon: 'RMF',
                description: 'Mutual funds investing in real estate securities',
                expectedReturn: '6-12%',
                risk: 'Medium',
                liquidity: 'High',
                minInvestment: '$1,000'
            }
        ]
    },
    'crowdfunded-re': {
        title: 'Crowdfunded RE',
        category: 'Real Estate',
        breadcrumb: 'Real Estate > Crowdfunded Real Estate',
        investments: [
            {
                name: 'Fundrise eREITs',
                icon: 'FND',
                description: 'Diversified real estate through Fundrise platform',
                expectedReturn: '8-12%',
                risk: 'Medium',
                liquidity: 'Low',
                minInvestment: '$10'
            }
        ]
    },

    // Commodities & Resources
    'precious-metals': {
        title: 'Precious Metals',
        category: 'Commodities & Resources',
        breadcrumb: 'Commodities & Resources > Precious Metals',
        investments: [
            {
                name: 'Physical Gold',
                icon: 'AU',
                description: 'Direct ownership of gold bars or coins',
                expectedReturn: '2-8%',
                risk: 'Medium',
                liquidity: 'Medium',
                minInvestment: '$100'
            }
        ]
    },
    'energy': {
        title: 'Energy',
        category: 'Commodities & Resources',
        breadcrumb: 'Commodities & Resources > Energy',
        investments: [
            {
                name: 'Oil & Gas Partnerships',
                icon: 'O&G',
                description: 'Direct participation in oil and gas drilling',
                expectedReturn: '10-30%',
                risk: 'Very High',
                liquidity: 'Very Low',
                minInvestment: '$25k+'
            }
        ]
    },
    'agriculture': {
        title: 'Agriculture',
        category: 'Commodities & Resources',
        breadcrumb: 'Commodities & Resources > Agriculture',
        investments: [
            {
                name: 'Farmland',
                icon: 'FRM',
                description: 'Direct ownership of agricultural land',
                expectedReturn: '6-12%',
                risk: 'Medium',
                liquidity: 'Very Low',
                minInvestment: '$100k+'
            }
        ]
    },
    'timber': {
        title: 'Timber',
        category: 'Commodities & Resources',
        breadcrumb: 'Commodities & Resources > Timber',
        investments: [
            {
                name: 'Timberland',
                icon: 'TIM',
                description: 'Direct ownership of timber-producing land',
                expectedReturn: '7-12%',
                risk: 'Medium',
                liquidity: 'Very Low',
                minInvestment: '$50k+'
            }
        ]
    },
    'water': {
        title: 'Water Rights',
        category: 'Commodities & Resources',
        breadcrumb: 'Commodities & Resources > Water Rights',
        investments: [
            {
                name: 'Water Rights',
                icon: 'H2O',
                description: 'Legal rights to use water from specific sources',
                expectedReturn: '8-16%',
                risk: 'Medium-High',
                liquidity: 'Very Low',
                minInvestment: '$10k+'
            }
        ]
    },
    'commodity-funds': {
        title: 'Commodity Funds',
        category: 'Commodities & Resources',
        breadcrumb: 'Commodities & Resources > Commodity Funds',
        investments: [
            {
                name: 'Broad Commodity ETFs',
                icon: 'BRC',
                description: 'Diversified exposure to multiple commodities',
                expectedReturn: '-10% to +25%',
                risk: 'High',
                liquidity: 'High',
                minInvestment: '$1'
            }
        ]
    },

    // Alternative Investments
    'hedge-funds': {
        title: 'Hedge Funds',
        category: 'Alternative Investments',
        breadcrumb: 'Alternative Investments > Hedge Funds',
        investments: [
            {
                name: 'Long/Short Equity',
                icon: 'L/S',
                description: 'Funds that buy and short stocks simultaneously',
                expectedReturn: '8-15%',
                risk: 'Medium-High',
                liquidity: 'Low',
                minInvestment: '$1M+'
            }
        ]
    },
    'private-credit': {
        title: 'Private Credit',
        category: 'Alternative Investments',
        breadcrumb: 'Alternative Investments > Private Credit',
        investments: [
            {
                name: 'Direct Lending',
                icon: 'DIR',
                description: 'Direct loans to middle-market companies',
                expectedReturn: '8-14%',
                risk: 'Medium-High',
                liquidity: 'Very Low',
                minInvestment: '$250k+'
            }
        ]
    },
    'infrastructure': {
        title: 'Infrastructure',
        category: 'Alternative Investments',
        breadcrumb: 'Alternative Investments > Infrastructure',
        investments: [
            {
                name: 'Public-Private Partnerships',
                icon: 'PPP',
                description: 'Investments in public infrastructure projects',
                expectedReturn: '6-10%',
                risk: 'Low-Medium',
                liquidity: 'Very Low',
                minInvestment: '$1M+'
            }
        ]
    },
    'collectibles': {
        title: 'Collectibles',
        category: 'Alternative Investments',
        breadcrumb: 'Alternative Investments > Collectibles',
        investments: [
            {
                name: 'Fine Art',
                icon: 'ART',
                description: 'Investment in high-value works of art',
                expectedReturn: '5-15%',
                risk: 'High',
                liquidity: 'Very Low',
                minInvestment: '$10k+'
            }
        ]
    },
    'royalties': {
        title: 'Royalties',
        category: 'Alternative Investments',
        breadcrumb: 'Alternative Investments > Royalties',
        investments: [
            {
                name: 'Music Royalties',
                icon: 'MUS',
                description: 'Income streams from music copyrights',
                expectedReturn: '8-16%',
                risk: 'Medium',
                liquidity: 'Low',
                minInvestment: '$1,000'
            }
        ]
    },
    'structured-products': {
        title: 'Structured Products',
        category: 'Alternative Investments',
        breadcrumb: 'Alternative Investments > Structured Products',
        investments: [
            {
                name: 'Structured Notes',
                icon: 'SN',
                description: 'Hybrid securities combining debt and derivatives',
                expectedReturn: '4-12%',
                risk: 'Medium-High',
                liquidity: 'Low',
                minInvestment: '$10k+'
            }
        ]
    },

    // Digital Assets
    'cryptocurrencies': {
        title: 'Cryptocurrencies',
        category: 'Digital Assets',
        breadcrumb: 'Digital Assets > Cryptocurrencies',
        investments: [
            {
                name: 'Bitcoin',
                icon: 'BTC',
                description: 'The first and largest cryptocurrency by market cap',
                expectedReturn: '-50% to +300%',
                risk: 'Very High',
                liquidity: 'High',
                minInvestment: '$1'
            }
        ]
    },
    'nfts': {
        title: 'NFTs',
        category: 'Digital Assets',
        breadcrumb: 'Digital Assets > NFTs',
        investments: [
            {
                name: 'Art NFTs',
                icon: 'ART',
                description: 'Digital art represented as non-fungible tokens',
                expectedReturn: '-90% to +1000%',
                risk: 'Extremely High',
                liquidity: 'Very Low',
                minInvestment: '$100'
            }
        ]
    },
    'defi': {
        title: 'DeFi',
        category: 'Digital Assets',
        breadcrumb: 'Digital Assets > DeFi',
        investments: [
            {
                name: 'Yield Farming',
                icon: 'YF',
                description: 'Lending or staking crypto for rewards',
                expectedReturn: '5-50%',
                risk: 'Very High',
                liquidity: 'Medium',
                minInvestment: '$100'
            }
        ]
    },
    'crypto-mining': {
        title: 'Crypto Mining',
        category: 'Digital Assets',
        breadcrumb: 'Digital Assets > Crypto Mining',
        investments: [
            {
                name: 'Cloud Mining',
                icon: 'CLD',
                description: 'Renting mining hardware power',
                expectedReturn: '-20% to +100%',
                risk: 'Very High',
                liquidity: 'Low',
                minInvestment: '$500'
            }
        ]
    },
    'stablecoins': {
        title: 'Stablecoins',
        category: 'Digital Assets',
        breadcrumb: 'Digital Assets > Stablecoins',
        investments: [
            {
                name: 'Asset-Backed Stablecoins',
                icon: 'ABS',
                description: 'Cryptocurrencies pegged to assets like the USD',
                expectedReturn: '0-5%',
                risk: 'Low',
                liquidity: 'Very High',
                minInvestment: '$1'
            }
        ]
    },

    // Derivatives
    'options': {
        title: 'Options',
        category: 'Derivatives',
        breadcrumb: 'Derivatives > Options',
        investments: [
            {
                name: 'Call Options',
                icon: 'CAL',
                description: 'Right to buy an asset at a specific price',
                expectedReturn: '-100% to +1000%',
                risk: 'Very High',
                liquidity: 'High',
                minInvestment: '$50+'
            }
        ]
    },
    'futures': {
        title: 'Futures',
        category: 'Derivatives',
        breadcrumb: 'Derivatives > Futures',
        investments: [
            {
                name: 'Stock Index Futures',
                icon: 'SIF',
                description: 'Futures contracts on stock market indices',
                expectedReturn: '-50% to +100%',
                risk: 'Very High',
                liquidity: 'High',
                minInvestment: '$5k+'
            }
        ]
    },
    'swaps': {
        title: 'Swaps',
        category: 'Derivatives',
        breadcrumb: 'Derivatives > Swaps',
        investments: [
            {
                name: 'Interest Rate Swaps',
                icon: 'IRS',
                description: 'Exchange of fixed and floating rate payments',
                expectedReturn: '-10% to +20%',
                risk: 'Medium-High',
                liquidity: 'Low',
                minInvestment: '$1M+'
            }
        ]
    },
    'warrants': {
        title: 'Warrants',
        category: 'Derivatives',
        breadcrumb: 'Derivatives > Warrants',
        investments: [
            {
                name: 'Stock Warrants',
                icon: 'STW',
                description: 'Long-term options to buy company stock',
                expectedReturn: '-100% to +1000%',
                risk: 'Very High',
                liquidity: 'Low-Medium',
                minInvestment: '$100+'
            }
        ]
    },
    'forex': {
        title: 'Forex',
        category: 'Derivatives',
        breadcrumb: 'Derivatives > Forex',
        investments: [
            {
                name: 'Major Currency Pairs',
                icon: 'MAJ',
                description: 'Trading major global currencies (EUR/USD, GBP/USD)',
                expectedReturn: '-50% to +100%',
                risk: 'Very High',
                liquidity: 'Very High',
                minInvestment: '$100+'
            }
        ]
    },

    // Cash & Cash Equivalents
    'savings-accounts': {
        title: 'Savings Accounts',
        category: 'Cash & Cash Equivalents',
        breadcrumb: 'Cash & Cash Equivalents > Savings Accounts',
        investments: [
            {
                name: 'High-Yield Savings',
                icon: 'HYS',
                description: 'Online banks offering competitive interest rates',
                expectedReturn: '3-5%',
                risk: 'Very Low',
                liquidity: 'Very High',
                minInvestment: '$0-$1'
            }
        ]
    },
    'cds': {
        title: 'CDs',
        category: 'Cash & Cash Equivalents',
        breadcrumb: 'Cash & Cash Equivalents > Certificates of Deposit',
        investments: [
            {
                name: 'Traditional CDs',
                icon: 'TCD',
                description: 'Fixed-term, fixed-rate deposit accounts',
                expectedReturn: '2-5%',
                risk: 'Very Low',
                liquidity: 'Low',
                minInvestment: '$500-$1k'
            }
        ]
    },
    'money-market': {
        title: 'Money Market',
        category: 'Cash & Cash Equivalents',
        breadcrumb: 'Cash & Cash Equivalents > Money Market',
        investments: [
            {
                name: 'Money Market Mutual Funds',
                icon: 'MMF',
                description: 'Mutual funds investing in short-term debt securities',
                expectedReturn: '2-5%',
                risk: 'Very Low',
                liquidity: 'Very High',
                minInvestment: '$1k'
            }
        ]
    },
    'treasury-bills': {
        title: 'Treasury Bills',
        category: 'Cash & Cash Equivalents',
        breadcrumb: 'Cash & Cash Equivalents > Treasury Bills',
        investments: [
            {
                name: '4-Week T-Bills',
                icon: '4W',
                description: 'Short-term government securities maturing in 4 weeks',
                expectedReturn: '3-5%',
                risk: 'Very Low',
                liquidity: 'High',
                minInvestment: '$100'
            }
        ]
    },
    'commercial-paper': {
        title: 'Commercial Paper',
        category: 'Cash & Cash Equivalents',
        breadcrumb: 'Cash & Cash Equivalents > Commercial Paper',
        investments: [
            {
                name: 'Corporate Commercial Paper',
                icon: 'CCP',
                description: 'Short-term unsecured corporate debt',
                expectedReturn: '3-6%',
                risk: 'Low',
                liquidity: 'Medium',
                minInvestment: '$100k+'
            }
        ]
    }
};