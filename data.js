/* =========================================================================
   GLOBAL INVESTMENT UNIVERSE – July 2025 Edition
   =========================================================================
   • Investment vehicles are grouped by **Asset Super-Class → Asset Class →
     Vehicle / Strategy → Instrument / Product / Sub-strategy**.
   • Every leaf object contains:
        – name                Human-readable name
        – icon                2-4 character mnemonic
        – description         Plain-English definition
        – expectedReturn      Range or forward-looking IRR
        – risk                Conservative label (see legend below)
        – liquidity           Conservative label (see legend below)
        – minInvestment       Minimum ticket in USD (or USD equiv.)
   • Legends
        Risk:   Very Low | Low | Low-Medium | Medium | Medium-High | High | Very High | Extremely High
        Liquidity: Very Low | Low | Medium | Medium-High | High | Very High
   • Sources: 2025 IMF WEO, World Bank, MSCI, S&P Dow Jones, Bloomberg,
     PitchBook, Preqin, J.P. Morgan LTCMA, CoinMetrics, DeFiLlama, CBRE,
     Artprice Global Index, Cambridge Associates, etc.
   ========================================================================= */

const investmentData = {
  /* ---------------------------------------------------------------------
     1. EQUITIES
  --------------------------------------------------------------------- */
  'public-stocks': {
    title: 'Public Stocks',
    category: 'Equities',
    breadcrumb: 'Equities > Public Stocks',
    investments: [
      {
        name: 'U.S. Large-Cap Stocks',
        icon: 'US-LC',
        description: 'Blue-chip companies with market capitalizations over $10 billion across all sectors.',
        expectedReturn: '8–11 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'U.S. Mid & Small-Cap Stocks',
        icon: 'US-SMID',
        description: 'Smaller companies with higher growth potential and increased volatility.',
        expectedReturn: '9–14 %',
        risk: 'Medium-High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'International Developed Markets',
        icon: 'DM',
        description: 'Stocks from established markets in Europe, Japan, and other developed countries.',
        expectedReturn: '7–10 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Emerging & Frontier Markets',
        icon: 'EM-FM',
        description: 'High-growth potential stocks from developing economies with higher volatility.',
        expectedReturn: '8–15 %',
        risk: 'High',
        liquidity: 'High',
        minInvestment: '$1'
      },
      {
        name: 'Dividend & Income Stocks',
        icon: 'DIV',
        description: 'Companies with strong dividend payment histories and consistent cash flows.',
        expectedReturn: '6–10 % + 3–5 % yield',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Thematic & Sector Stocks',
        icon: 'THEME',
        description: 'Concentrated exposure to specific themes like AI, clean energy, or healthcare.',
        expectedReturn: '10–25 % (theme-dependent)',
        risk: 'High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Preferred Stocks & Hybrids',
        icon: 'PREF',
        description: 'Hybrid securities combining equity upside with bond-like income features.',
        expectedReturn: '5–9 %',
        risk: 'Medium',
        liquidity: 'High',
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
        name: 'Index Mutual Funds',
        icon: 'IDX',
        description: 'Low-cost passive tracking of market indices with daily NAV pricing.',
        expectedReturn: '7–11 %',
        risk: 'Medium',
        liquidity: 'High (T+1 settlement)',
        minInvestment: '$1 – $3,000'
      },
      {
        name: 'Actively Managed Equity Funds',
        icon: 'ACT-EQ',
        description: 'Professional stock selection targeting alpha generation.',
        expectedReturn: '6–15 % (manager dependent)',
        risk: 'Medium-High',
        liquidity: 'High (T+1)',
        minInvestment: '$1,000 – $50k'
      },
      {
        name: 'Balanced & Allocation Funds',
        icon: 'BAL',
        description: 'Mixed equity/bond portfolios with strategic or tactical allocation.',
        expectedReturn: '6–10 %',
        risk: 'Medium',
        liquidity: 'High',
        minInvestment: '$1,000'
      },
      {
        name: 'Target-Date Funds',
        icon: 'TDF',
        description: 'Age-based glide path from growth to income approaching retirement.',
        expectedReturn: '5–9 % (date-specific)',
        risk: 'Medium → Low over time',
        liquidity: 'High',
        minInvestment: '$1,000'
      },
      {
        name: 'Sector & Specialty Funds',
        icon: 'SPEC',
        description: 'Concentrated exposure to specific industries or investment themes.',
        expectedReturn: '5–20 % (sector dependent)',
        risk: 'High',
        liquidity: 'High',
        minInvestment: '$1,000'
      },
      {
        name: 'International & Global Funds',
        icon: 'GLOB',
        description: 'Geographic diversification across developed and emerging markets.',
        expectedReturn: '6–12 %',
        risk: 'Medium-High',
        liquidity: 'High',
        minInvestment: '$1,000'
      }
    ]
  },

  'etfs': {
    title: 'Exchange-Traded Funds (ETFs)',
    category: 'Equities',
    breadcrumb: 'Equities > ETFs',
    investments: [
      {
        name: 'Broad Market Index ETFs',
        icon: 'BMKT',
        description: 'Track major indices like S&P 500, Total Market, or MSCI World.',
        expectedReturn: '8–11 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'International ETFs',
        icon: 'INTL',
        description: 'Developed and emerging markets outside the U.S.',
        expectedReturn: '7–10 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Sector & Thematic ETFs',
        icon: 'SECT',
        description: 'Technology, healthcare, clean energy, AI, and other sector themes.',
        expectedReturn: '5–25 % (sector dependent)',
        risk: 'Medium-High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Factor & Smart Beta ETFs',
        icon: 'FACT',
        description: 'Value, growth, momentum, quality, low volatility, and dividend factors.',
        expectedReturn: '7–13 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Leveraged & Inverse ETFs',
        icon: 'LEV',
        description: 'Daily-reset 2x-3x leveraged or inverse exposure for tactical trading.',
        expectedReturn: '-50 % to +100 % (path dependent)',
        risk: 'Very High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Actively Managed ETFs',
        icon: 'ACT',
        description: 'Professional management with ETF structure and intraday trading.',
        expectedReturn: '6–15 %',
        risk: 'Medium-High',
        liquidity: 'High',
        minInvestment: '$1'
      }
    ]
  },

  'reits': {
    title: 'Real-Estate Investment Trusts',
    category: 'Equities',
    breadcrumb: 'Equities > REITs',
    investments: [
      {
        name: 'Retail REITs (Regional Malls & Strip Centers)',
        icon: 'RTL',
        description: 'Owners of shopping centers and freestanding retail.',
        expectedReturn: '7–11 %',
        risk: 'Medium-High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Industrial / Logistics REITs',
        icon: 'IND',
        description: 'Warehouses, fulfillment centers, last-mile hubs.',
        expectedReturn: '9–13 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Data-Center REITs',
        icon: 'DCT',
        description: 'Colocation and hyperscale data-center assets.',
        expectedReturn: '10–14 %',
        risk: 'Medium-High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Cell-Tower REITs',
        icon: 'TWR',
        description: 'Wireless communication towers and small-cell networks.',
        expectedReturn: '8–12 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Healthcare REITs',
        icon: 'HLT',
        description: 'Hospitals, senior housing, life-science labs.',
        expectedReturn: '7–11 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Self-Storage REITs',
        icon: 'STO',
        description: 'Public storage facilities.',
        expectedReturn: '8–12 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Mortgage REITs (Agency MBS)',
        icon: 'MRE',
        description: 'Leveraged portfolios of agency mortgage-backed securities.',
        expectedReturn: '8–12 % (dividend yield 10-13 %)',
        risk: 'High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'International REITs (Developed ex-US)',
        icon: 'INTL-REIT',
        description: 'Diversified exposure to listed property companies abroad.',
        expectedReturn: '6–10 %',
        risk: 'Medium-High',
        liquidity: 'Very High',
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
        name: 'Buyout – Large-Cap',
        icon: 'LBO',
        description: 'Take-private of mature companies with EBITDA > $100 m.',
        expectedReturn: '14–20 % net IRR',
        risk: 'High',
        liquidity: 'Very Low (10–12 yr lock-up)',
        minInvestment: '$1 M – $10 M (LP commitment)'
      },
      {
        name: 'Buyout – Mid-Market',
        icon: 'MMBO',
        description: 'North-American and European companies with EBITDA $10–100 m.',
        expectedReturn: '16–22 % net IRR',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$250 k – $1 M'
      },
      {
        name: 'Growth Equity',
        icon: 'GRW',
        description: 'Minority stakes in high-growth scale-ups (Series C+).',
        expectedReturn: '18–25 % net IRR',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$500 k – $5 M'
      },
      {
        name: 'Secondaries (LP Stakes)',
        icon: 'SEC',
        description: 'Purchasing existing LP interests on the secondary market.',
        expectedReturn: '12–16 % net IRR (shorter J-curve)',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      },
      {
        name: 'Private Credit – Unitranche (Sponsored)',
        icon: 'PC-U',
        description: 'Senior secured direct lending to PE-backed companies.',
        expectedReturn: '9–12 % cash yield',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$250 k'
      },
      {
        name: 'Distressed / Special-Sits PE',
        icon: 'DST',
        description: 'Control investments in stressed or defaulted entities.',
        expectedReturn: '15–25 % net IRR',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      }
    ]
  },

  'venture-capital': {
    title: 'Venture Capital',
    category: 'Equities',
    breadcrumb: 'Equities > Venture Capital',
    investments: [
      {
        name: 'Pre-Seed Funds',
        icon: 'PSE',
        description: 'First institutional capital into idea-stage startups.',
        expectedReturn: '25–40 % gross IRR (high dispersion)',
        risk: 'Extremely High',
        liquidity: 'Very Low (12–15 yr)',
        minInvestment: '$250 k'
      },
      {
        name: 'Seed Stage Funds',
        icon: 'SED',
        description: 'Product-market fit, <$5 m revenue.',
        expectedReturn: '20–35 % gross IRR',
        risk: 'Extremely High',
        liquidity: 'Very Low',
        minInvestment: '$500 k'
      },
      {
        name: 'Series A–B (Early Growth)',
        icon: 'SVB',
        description: 'Scaling revenue $5–50 m.',
        expectedReturn: '18–30 % gross IRR',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      },
      {
        name: 'Late-Stage / Pre-IPO',
        icon: 'LATE',
        description: 'Unicorns approaching exit within 2–4 years.',
        expectedReturn: '15–25 % gross IRR',
        risk: 'High',
        liquidity: 'Very Low (but shorter duration)',
        minInvestment: '$1 M'
      },
      {
        name: 'Venture Secondaries',
        icon: 'VSEC',
        description: 'Buying existing shareholder stakes in late-stage private companies.',
        expectedReturn: '12–20 % net IRR',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      },
      {
        name: 'Venture Debt',
        icon: 'VDT',
        description: 'Senior secured loans to VC-backed companies with warrants.',
        expectedReturn: '10–15 % cash yield + equity kicker',
        risk: 'High',
        liquidity: 'Low',
        minInvestment: '$500 k'
      }
    ]
  },

  'angel-investing': {
    title: 'Angel Investing',
    category: 'Equities',
    breadcrumb: 'Equities > Angel Investing',
    investments: [
      {
        name: 'Individual Angel Rounds',
        icon: 'ANG',
        description: 'Direct equity investments in pre-seed and seed stage startups.',
        expectedReturn: '0–100× (power-law distribution)',
        risk: 'Extremely High',
        liquidity: 'Very Low',
        minInvestment: '$1k – $25k per deal'
      },
      {
        name: 'Angel Groups & Syndicates',
        icon: 'SYN',
        description: 'Pooled investments with experienced angel investors for deal flow and due diligence.',
        expectedReturn: '10–50× (selective deals)',
        risk: 'Extremely High',
        liquidity: 'Very Low',
        minInvestment: '$1k – $10k per deal'
      },
      {
        name: 'Rolling Funds',
        icon: 'RF',
        description: 'Quarterly subscription vehicles providing diversified startup exposure.',
        expectedReturn: '15–30 % gross IRR',
        risk: 'Extremely High',
        liquidity: 'Very Low',
        minInvestment: '$6.25k / quarter'
      },
      {
        name: 'Equity Crowdfunding Platforms',
        icon: 'ECF',
        description: 'Democratized startup investing through platforms like Republic, SeedInvest.',
        expectedReturn: '0–20× (platform dependent)',
        risk: 'Extremely High',
        liquidity: 'Very Low',
        minInvestment: '$100 – $5k per deal'
      },
      {
        name: 'Secondary Angel Shares',
        icon: 'SEC-ANG',
        description: 'Purchasing existing angel positions in later-stage private companies.',
        expectedReturn: '5–25× (shorter timeline)',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$5k – $50k'
      }
    ]
  },

  /* ---------------------------------------------------------------------
     2. FIXED INCOME & DEBT
  --------------------------------------------------------------------- */
  'government-bonds': {
    title: 'Government Bonds',
    category: 'Fixed Income & Debt',
    breadcrumb: 'Fixed Income & Debt > Government Bonds',
    investments: [
      {
        name: 'U.S. Treasury Securities',
        icon: 'UST',
        description: 'Full spectrum of U.S. government debt from T-bills to 30-year bonds.',
        expectedReturn: '4.0 – 5.4 % (maturity dependent)',
        risk: 'Very Low',
        liquidity: 'Very High',
        minInvestment: '$100'
      },
      {
        name: 'Treasury Inflation-Protected Securities (TIPS)',
        icon: 'TIPS',
        description: 'U.S. Treasury bonds with principal adjusted for inflation.',
        expectedReturn: '1.8 – 2.2 % real',
        risk: 'Low',
        liquidity: 'Very High',
        minInvestment: '$100'
      },
      {
        name: 'Developed Market Sovereign Bonds',
        icon: 'DM-SOV',
        description: 'Government bonds from major developed countries like Germany, Japan, UK.',
        expectedReturn: '0.8 – 2.7 %',
        risk: 'Very Low',
        liquidity: 'Very High',
        minInvestment: '$1,000'
      },
      {
        name: 'Emerging Market Sovereign Bonds',
        icon: 'EM-SOV',
        description: 'USD-denominated government bonds from developing countries.',
        expectedReturn: '6–10 %',
        risk: 'Medium-High',
        liquidity: 'High',
        minInvestment: '$1,000'
      },
      {
        name: 'Zero-Coupon Government Bonds',
        icon: 'ZERO',
        description: 'Government bonds sold at discount with no periodic interest payments.',
        expectedReturn: '3.5 – 5.0 % (yield to maturity)',
        risk: 'Low',
        liquidity: 'High',
        minInvestment: '$1,000'
      },
      {
        name: 'Green & Sustainable Sovereign Bonds',
        icon: 'ESG-SOV',
        description: 'Government bonds with proceeds earmarked for environmental projects.',
        expectedReturn: 'Sovereign curve ±10 bps',
        risk: 'Very Low',
        liquidity: 'High',
        minInvestment: '$1,000'
      }
    ]
  },

  'corporate-bonds': {
    title: 'Corporate Bonds',
    category: 'Fixed Income & Debt',
    breadcrumb: 'Fixed Income & Debt > Corporate Bonds',
    investments: [
      {
        name: 'U.S. Investment-Grade (A–BBB)',
        icon: 'IG-US',
        description: 'High-quality corporates, duration 5–7 yr.',
        expectedReturn: '5.0 – 5.5 %',
        risk: 'Low-Medium',
        liquidity: 'Very High',
        minInvestment: '$1,000'
      },
      {
        name: 'Euro Investment-Grade',
        icon: 'IG-EU',
        description: 'EUR corporates across sectors.',
        expectedReturn: '3.7 – 4.3 %',
        risk: 'Low-Medium',
        liquidity: 'Very High',
        minInvestment: '€1,000'
      },
      {
        name: 'BBB-BBB- Rated “Fallen-Angel Watch”',
        icon: 'BBB-FA',
        description: 'Lowest rung of IG with upgrade/downgrade asymmetry.',
        expectedReturn: '5.5 – 6.5 %',
        risk: 'Medium',
        liquidity: 'High',
        minInvestment: '$1,000'
      },
      {
        name: 'Yankee Bonds (Foreign Issuers in USD)',
        icon: 'YAN',
        description: 'Non-U.S. corporates issuing in USD.',
        expectedReturn: 'IG: 5.2 %, HY: 8–10 %',
        risk: 'Medium',
        liquidity: 'High',
        minInvestment: '$1,000'
      },
      {
        name: 'Green Corporate Bonds',
        icon: 'GRN-CORP',
        description: 'Use-of-proceeds labelled bonds.',
        expectedReturn: 'IG curve ±0–10 bps',
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
        name: 'General Obligation (AAA–A)',
        icon: 'GO',
        description: 'Backed by full taxing power.',
        expectedReturn: '2.5 – 3.5 % tax-free (3.8–5.0 % TEY)',
        risk: 'Low',
        liquidity: 'Medium-High',
        minInvestment: '$5,000'
      },
      {
        name: 'Revenue Bonds (Essential Services)',
        icon: 'REV',
        description: 'Secured by specific revenue streams (water, sewer, toll roads).',
        expectedReturn: '3.0 – 4.0 % tax-free',
        risk: 'Low-Medium',
        liquidity: 'Medium-High',
        minInvestment: '$5,000'
      },
      {
        name: 'High-Yield Municipal (BBB and below)',
        icon: 'HY-MUNI',
        description: 'Non-rated or lower-rated issues, often 501(c)(3) hospitals.',
        expectedReturn: '4.5 – 6.0 % tax-free',
        risk: 'Medium-High',
        liquidity: 'Medium',
        minInvestment: '$25,000'
      },
      {
        name: 'Build America Bonds (BABs, taxable)',
        icon: 'BAB',
        description: 'Taxable munis issued 2009-2010 still trading in secondary.',
        expectedReturn: '5.0 – 5.5 % taxable',
        risk: 'Low-Medium',
        liquidity: 'Medium',
        minInvestment: '$5,000'
      }
    ]
  },

  'peer-to-peer': {
    title: 'Peer-to-Peer Lending',
    category: 'Fixed Income & Debt',
    breadcrumb: 'Fixed Income & Debt > Peer-to-Peer Lending',
    investments: [
      {
        name: 'Unsecured Consumer Loans (Prime)',
        icon: 'P2P-PRM',
        description: 'Prime-grade borrowers (FICO 720+) via LendingClub, Prosper.',
        expectedReturn: '7–9 %',
        risk: 'Medium',
        liquidity: 'Low (4-yr notes)',
        minInvestment: '$25'
      },
      {
        name: 'Near-Prime Consumer Loans',
        icon: 'P2P-NP',
        description: 'FICO 640–719 borrowers.',
        expectedReturn: '9–12 %',
        risk: 'Medium-High',
        liquidity: 'Low',
        minInvestment: '$25'
      },
      {
        name: 'Small-Business P2P Loans',
        icon: 'P2P-SME',
        description: 'Revenue-based or term loans to SMEs.',
        expectedReturn: '10–14 %',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$100'
      },
      {
        name: 'Real-Estate P2P (Fix-&-Flip)',
        icon: 'P2P-REF',
        description: 'Short-duration bridge loans collateralised by 1st-lien real estate.',
        expectedReturn: '9–13 %',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$1,000'
      },
      {
        name: 'Crypto-Collateralised P2P',
        icon: 'P2P-CRYPTO',
        description: 'Stablecoin loans over-collateralised by BTC/ETH.',
        expectedReturn: '8–15 %',
        risk: 'High',
        liquidity: 'Medium',
        minInvestment: '$50'
      }
    ]
  },

  'high-yield-debt': {
    title: 'High Yield Debt',
    category: 'Fixed Income & Debt',
    breadcrumb: 'Fixed Income & Debt > High Yield Debt',
    investments: [
      {
        name: 'U.S. High-Yield Bonds (BB–CCC)',
        icon: 'USHY',
        description: 'Liquid HY corporate bond index.',
        expectedReturn: '7.5 – 9.5 %',
        risk: 'High',
        liquidity: 'Very High',
        minInvestment: '$1,000'
      },
      {
        name: 'European High-Yield',
        icon: 'EUHY',
        description: 'EUR and GBP-denominated HY corporates.',
        expectedReturn: '6.5 – 8.5 %',
        risk: 'High',
        liquidity: 'Very High',
        minInvestment: '€1,000'
      },
      {
        name: 'Leveraged Loans (Senior Secured)',
        icon: 'BKLN',
        description: 'Floating-rate term loans to leveraged corporates.',
        expectedReturn: 'SOFR + 350–450 bps',
        risk: 'Medium-High',
        liquidity: 'High',
        minInvestment: '$1,000'
      },
      {
        name: 'Fallen-Angel HY ETF',
        icon: 'FALN',
        description: 'Recently downgraded IG names, mean-reversion alpha.',
        expectedReturn: '8–11 %',
        risk: 'High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Distressed Debt Hedge-Fund Style',
        icon: 'DIST-HF',
        description: 'Activist control or loan-to-own strategies.',
        expectedReturn: '15–25 % net',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      }
    ]
  },

  'convertible-bonds': {
    title: 'Convertible Bonds',
    category: 'Fixed Income & Debt',
    breadcrumb: 'Fixed Income & Debt > Convertible Bonds',
    investments: [
      {
        name: 'U.S. Convertible Index ETF',
        icon: 'ICVT',
        description: 'Diversified exposure to U.S. convertibles.',
        expectedReturn: '8–12 % (equity upside + coupon)',
        risk: 'Medium-High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Mandatory Convertible Preferred',
        icon: 'MCP',
        description: 'Auto-convert to equity at maturity with premium.',
        expectedReturn: '7–10 %',
        risk: 'Medium',
        liquidity: 'High',
        minInvestment: '$1,000'
      },
      {
        name: 'Asian Convertible Bonds',
        icon: 'ACVT',
        description: 'Tech-heavy universe (Korea, Taiwan, China).',
        expectedReturn: '7–11 %',
        risk: 'High',
        liquidity: 'High',
        minInvestment: '$2,000'
      },
      {
        name: 'Distressed Convertible Bonds',
        icon: 'DIST-CVT',
        description: 'Convertibles trading at or below conversion price with recovery potential.',
        expectedReturn: '12–18 %',
        risk: 'High',
        liquidity: 'Medium',
        minInvestment: '$5,000'
      },
      {
        name: 'Convertible Arbitrage ETF',
        icon: 'CVT-ARB',
        description: 'Long convertibles, short underlying equity for volatility capture.',
        expectedReturn: '6–10 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      }
    ]
  },

  /* ---------------------------------------------------------------------
     3. REAL ESTATE
  --------------------------------------------------------------------- */
  'residential': {
    title: 'Residential Real Estate',
    category: 'Real Estate',
    breadcrumb: 'Real Estate > Residential',
    investments: [
      {
        name: 'Long-Term Single-Family Rentals (LTR)',
        icon: 'SFR',
        description: 'Single-family homes leased unfurnished.',
        expectedReturn: '8–12 % (unlevered)',
        risk: 'Medium',
        liquidity: 'Low',
        minInvestment: '$50 k – $500 k'
      },
      {
        name: 'Short-Term Rentals (Airbnb)',
        icon: 'STR',
        description: 'Furnished vacation rentals in tourist markets.',
        expectedReturn: '12–20 % gross (location dependent)',
        risk: 'Medium-High',
        liquidity: 'Low',
        minInvestment: '$100 k'
      },
      {
        name: 'Build-to-Rent Communities',
        icon: 'BTR',
        description: 'Entire subdivisions designed for institutional rental.',
        expectedReturn: '10–14 %',
        risk: 'Medium',
        liquidity: 'Very Low',
        minInvestment: '$100 k (via fund)'
      },
      {
        name: 'Accessory Dwelling Units (ADU)',
        icon: 'ADU',
        description: 'Backyard units or garage conversions in high-cost metros.',
        expectedReturn: '15–25 % (high leverage, zoning risk)',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$50 k'
      }
    ]
  },

  'commercial': {
    title: 'Commercial Real Estate',
    category: 'Real Estate',
    breadcrumb: 'Real Estate > Commercial',
    investments: [
      {
        name: 'Urban Class-A Office',
        icon: 'OFF-A',
        description: 'Trophy towers in Tier-1 CBDs.',
        expectedReturn: '6–9 % (cap rates 5.5–6.5 %)',
        risk: 'Medium-High',
        liquidity: 'Low',
        minInvestment: '$1 M'
      },
      {
        name: 'Life-Sciences Lab Space',
        icon: 'LAB',
        description: 'Wet-lab buildings near research universities.',
        expectedReturn: '9–13 %',
        risk: 'Medium-High',
        liquidity: 'Low',
        minInvestment: '$500 k'
      },
      {
        name: 'Neighborhood Strip Retail',
        icon: 'NSR',
        description: 'Grocery-anchored centers with essential services.',
        expectedReturn: '8–11 %',
        risk: 'Medium',
        liquidity: 'Low',
        minInvestment: '$250 k'
      },
      {
        name: 'Outlet Malls',
        icon: 'OUT',
        description: 'Tourist-oriented discount retail.',
        expectedReturn: '7–10 %',
        risk: 'Medium-High',
        liquidity: 'Low',
        minInvestment: '$1 M'
      }
    ]
  },

  'industrial': {
    title: 'Industrial Real Estate',
    category: 'Real Estate',
    breadcrumb: 'Real Estate > Industrial',
    investments: [
      {
        name: 'Last-Mile Logistics Hubs',
        icon: 'LMH',
        description: 'Small-box infill warehouses (50–200 k sq ft).',
        expectedReturn: '8–12 %',
        risk: 'Medium',
        liquidity: 'Low',
        minInvestment: '$250 k'
      },
      {
        name: 'Cold-Storage Facilities',
        icon: 'COLD',
        description: 'Temperature-controlled warehouses for food & pharma.',
        expectedReturn: '10–14 %',
        risk: 'Medium-High',
        liquidity: 'Low',
        minInvestment: '$500 k'
      },
      {
        name: 'Manufacturing (Light Industrial)',
        icon: 'LIG',
        description: 'Multi-tenant flex/R&D space.',
        expectedReturn: '8–11 %',
        risk: 'Medium',
        liquidity: 'Low',
        minInvestment: '$250 k'
      },
      {
        name: 'Fulfillment Centers (E-commerce)',
        icon: 'FUL',
        description: 'Large-format distribution centers for online retailers.',
        expectedReturn: '9–13 %',
        risk: 'Medium',
        liquidity: 'Low',
        minInvestment: '$500 k'
      },
      {
        name: 'Industrial Land Banking',
        icon: 'ILB',
        description: 'Holding raw land for future industrial development.',
        expectedReturn: '6–15 % (speculative)',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$100 k'
      }
    ]
  },

  'development': {
    title: 'Real-Estate Development',
    category: 'Real Estate',
    breadcrumb: 'Real Estate > Development',
    investments: [
      {
        name: 'Ground-Up Multifamily (Class-A)',
        icon: 'GUD-MF',
        description: 'New luxury apartments in urban infill.',
        expectedReturn: '15–25 % IRR',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$100 k'
      },
      {
        name: 'Condo Conversion',
        icon: 'CNV',
        description: 'Rental apartments → condos for sale.',
        expectedReturn: '20–30 % IRR',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$100 k'
      },
      {
        name: 'Subdivision Land Development',
        icon: 'SUB',
        description: 'Entitlement and horizontal development of lots.',
        expectedReturn: '20–40 % IRR',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$250 k'
      },
      {
        name: 'Mixed-Use Development',
        icon: 'MXD',
        description: 'Retail, office, and residential components in single project.',
        expectedReturn: '18–28 % IRR',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$500 k'
      },
      {
        name: 'Retail Development (Strip Centers)',
        icon: 'RET-DEV',
        description: 'Ground-up community shopping centers with anchor tenants.',
        expectedReturn: '15–22 % IRR',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$250 k'
      }
    ]
  },

  'real-estate-funds': {
    title: 'Real-Estate Funds',
    category: 'Real Estate',
    breadcrumb: 'Real Estate > Real-Estate Funds',
    investments: [
      {
        name: 'Core Open-End Fund',
        icon: 'CORE',
        description: 'Stabilised income-producing assets, 25–35 % leverage.',
        expectedReturn: '7–9 % net',
        risk: 'Low-Medium',
        liquidity: 'Quarterly',
        minInvestment: '$250 k'
      },
      {
        name: 'Core-Plus Fund',
        icon: 'CPLS',
        description: 'Light value-add, 35–50 % leverage.',
        expectedReturn: '9–11 % net',
        risk: 'Medium',
        liquidity: 'Quarterly',
        minInvestment: '$250 k'
      },
      {
        name: 'Value-Add Fund',
        icon: 'VA',
        description: 'Renovations, re-leasing, 50–65 % leverage.',
        expectedReturn: '12–16 % net IRR',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      },
      {
        name: 'Opportunistic / Distressed Fund',
        icon: 'OPP',
        description: 'Foreclosure auctions, recapitalisations, major redevelopment.',
        expectedReturn: '18–25 % net IRR',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      },
      {
        name: 'Global REIT Index Fund',
        icon: 'REIDX',
        description: 'Passive exposure to listed REITs worldwide.',
        expectedReturn: '7–10 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      }
    ]
  },

  'crowdfunded-re': {
    title: 'Crowdfunded Real Estate',
    category: 'Real Estate',
    breadcrumb: 'Real Estate > Crowdfunded Real Estate',
    investments: [
      {
        name: 'Fundrise Flagship eREIT',
        icon: 'FND',
        description: 'Diversified portfolio of equity and debt.',
        expectedReturn: '8–12 %',
        risk: 'Medium',
        liquidity: 'Quarterly redemption window',
        minInvestment: '$10'
      },
      {
        name: 'Yieldstreet Prism Fund',
        icon: 'YLD',
        description: 'Multi-asset real-estate debt fund.',
        expectedReturn: '8–10 %',
        risk: 'Medium',
        liquidity: 'Quarterly',
        minInvestment: '$2,500'
      },
      {
        name: 'Arrived Homes – Single-Family Shares',
        icon: 'ARR',
        description: 'Buy shares in specific rental homes.',
        expectedReturn: '8–12 % (cash + appreciation)',
        risk: 'Medium',
        liquidity: 'Very Low (secondary bulletin board)',
        minInvestment: '$100'
      },
      {
        name: 'RealtyMogul – 1031 Exchange DST',
        icon: '1031',
        description: 'Delaware Statutory Trust for 1031 exchange investors.',
        expectedReturn: '6–9 % cash yield',
        risk: 'Medium',
        liquidity: 'Very Low',
        minInvestment: '$25 k'
      }
    ]
  },

  /* ---------------------------------------------------------------------
     4. COMMODITIES & NATURAL RESOURCES
  --------------------------------------------------------------------- */
  'precious-metals': {
    title: 'Precious Metals',
    category: 'Commodities & Resources',
    breadcrumb: 'Commodities & Resources > Precious Metals',
    investments: [
      {
        name: 'Allocated Gold Bullion (Branded Bars)',
        icon: 'AU-ALLOC',
        description: 'Good-delivery bars stored in vault, serialised.',
        expectedReturn: '4–7 % (long-run real)',
        risk: 'Medium',
        liquidity: 'Medium',
        minInvestment: '$1,000 (1 oz)'
      },
      {
        name: 'Gold ETF (Physical Backed)',
        icon: 'GLD',
        description: 'Trust holding allocated London Bullion Market Association gold.',
        expectedReturn: '4–7 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Gold Futures (CME)',
        icon: 'GC',
        description: 'Leveraged contracts, expiry every 2 months.',
        expectedReturn: '-50 % to +100 %',
        risk: 'Very High',
        liquidity: 'Very High',
        minInvestment: '$8,000 (initial margin)'
      },
      {
        name: 'Silver ETF',
        icon: 'SLV',
        description: 'Physical silver trust.',
        expectedReturn: '6–10 % (higher beta to gold)',
        risk: 'High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Platinum ETF',
        icon: 'PPLT',
        description: 'Physical platinum exposure.',
        expectedReturn: '5–9 %',
        risk: 'High',
        liquidity: 'High',
        minInvestment: '$1'
      },
      {
        name: 'Palladium ETF',
        icon: 'PALL',
        description: 'Primary supply from Russia & South Africa.',
        expectedReturn: '8–15 % (volatile)',
        risk: 'Very High',
        liquidity: 'High',
        minInvestment: '$1'
      },
      {
        name: 'Royalty & Streaming Companies',
        icon: 'ROYAL',
        description: 'Franco-Nevada, Wheaton Precious Metals.',
        expectedReturn: '8–12 % (leveraged to metal prices)',
        risk: 'High',
        liquidity: 'Very High',
        minInvestment: '$1'
      }
    ]
  },

  'energy': {
    title: 'Energy',
    category: 'Commodities & Resources',
    breadcrumb: 'Commodities & Resources > Energy',
    investments: [
      {
        name: 'Physical Oil ETF (WTI Crude)',
        icon: 'USO',
        description: 'Futures-based exposure to front-month WTI.',
        expectedReturn: '-30 % to +50 %',
        risk: 'Very High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Energy MLPs (Midstream Infrastructure)',
        icon: 'MLP',
        description: 'Pipelines & storage with toll-road model.',
        expectedReturn: '7–10 % cash yield',
        risk: 'Medium-High',
        liquidity: 'High',
        minInvestment: '$1'
      },
      {
        name: 'Direct Working-Interest (Oil & Gas)',
        icon: 'WI',
        description: 'Non-operated interest in producing wells.',
        expectedReturn: '12–30 % (depletion curve)',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$25 k'
      },
      {
        name: 'Carbon-Credit Futures ETF (EU ETS)',
        icon: 'CARB',
        description: 'European Union Allowance futures.',
        expectedReturn: '10–25 % (policy driven)',
        risk: 'Very High',
        liquidity: 'High',
        minInvestment: '$1'
      },
      {
        name: 'Uranium Trust',
        icon: 'URN',
        description: 'Physical uranium oxide storage.',
        expectedReturn: '15–30 % (supply squeeze)',
        risk: 'Very High',
        liquidity: 'Medium-High',
        minInvestment: '$1'
      }
    ]
  },

  'agriculture': {
    title: 'Agriculture',
    category: 'Commodities & Resources',
    breadcrumb: 'Commodities & Resources > Agriculture',
    investments: [
      {
        name: 'U.S. Row-Crop Farmland (Midwest)',
        icon: 'CROP-US',
        description: 'Corn/soy acreage leased to operators.',
        expectedReturn: '8–11 % (4–5 % cash rent + appreciation)',
        risk: 'Medium',
        liquidity: 'Very Low',
        minInvestment: '$100 k'
      },
      {
        name: 'Permanent Crop (Almonds, Pistachios)',
        icon: 'NUTS',
        description: 'California orchards with water rights.',
        expectedReturn: '10–14 %',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$250 k'
      },
      {
        name: 'Agricultural REITs (Farmland Partners)',
        icon: 'FPI',
        description: 'Publicly-traded farmland landlord.',
        expectedReturn: '7–10 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Agricultural Commodity ETF (DBA)',
        icon: 'DBA',
        description: 'Futures on corn, wheat, soy, sugar.',
        expectedReturn: '-20 % to +30 %',
        risk: 'High',
        liquidity: 'Very High',
        minInvestment: '$1'
      }
    ]
  },

  'timber': {
    title: 'Timberland',
    category: 'Commodities & Resources',
    breadcrumb: 'Commodities & Resources > Timber',
    investments: [
      {
        name: 'U.S. South Pine Plantations',
        icon: 'PINE',
        description: 'Biological growth + land appreciation.',
        expectedReturn: '7–10 % real IRR',
        risk: 'Medium',
        liquidity: 'Very Low',
        minInvestment: '$1 M (via TIMO fund)'
      },
      {
        name: 'Pacific Northwest Douglas-Fir',
        icon: 'PNW',
        description: 'Higher stumpage prices, longer rotations.',
        expectedReturn: '8–11 % real',
        risk: 'Medium',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      },
      {
        name: 'Weyerhaeuser (REIT)',
        icon: 'WY',
        description: 'Listed timber REIT with mills.',
        expectedReturn: '8–11 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'International Timberland (Uruguay/Brazil)',
        icon: 'INTL-TIM',
        description: 'Fast-growing eucalyptus plantations in South America.',
        expectedReturn: '12–16 % real IRR',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$500 k'
      },
      {
        name: 'Carbon Credit Forestry',
        icon: 'CRB-FOR',
        description: 'Tree planting projects generating tradeable carbon offsets.',
        expectedReturn: '10–15 % (carbon price dependent)',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$100 k'
      }
    ]
  },

  'water': {
    title: 'Water Rights & Infrastructure',
    category: 'Commodities & Resources',
    breadcrumb: 'Commodities & Resources > Water Rights',
    investments: [
      {
        name: 'Colorado River Basin Water Rights',
        icon: 'CRB',
        description: 'Agricultural to municipal transfer rights.',
        expectedReturn: '8–15 % (scarcity value)',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$100 k'
      },
      {
        name: 'Desalination Project Bonds',
        icon: 'DESAL',
        description: 'Green bonds funding reverse-osmosis plants.',
        expectedReturn: '5–7 %',
        risk: 'Medium',
        liquidity: 'Low',
        minInvestment: '$25 k'
      },
      {
        name: 'Water ETF (PHO)',
        icon: 'PHO',
        description: 'Global water utilities & infrastructure.',
        expectedReturn: '8–12 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Australian Water Allocations',
        icon: 'AUS-H2O',
        description: 'Tradeable water entitlements in Murray-Darling Basin.',
        expectedReturn: '10–20 % (drought dependent)',
        risk: 'High',
        liquidity: 'Low',
        minInvestment: '$50 k'
      },
      {
        name: 'Water Infrastructure Private Equity',
        icon: 'H2O-PE',
        description: 'Direct investments in water treatment and distribution systems.',
        expectedReturn: '12–18 % net IRR',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      }
    ]
  },

  'commodity-funds': {
    title: 'Commodity Funds & ETFs',
    category: 'Commodities & Resources',
    breadcrumb: 'Commodities & Resources > Commodity Funds',
    investments: [
      {
        name: 'Bloomberg Commodity Index ETF',
        icon: 'PDBC',
        description: 'Diversified across energy, metals, agriculture.',
        expectedReturn: '3–8 % (beta to inflation)',
        risk: 'High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Energy Transition ETF (Clean Energy + Metals)',
        icon: 'ERTH',
        description: 'Copper, lithium, nickel + solar & wind stocks.',
        expectedReturn: '10–20 %',
        risk: 'Very High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Commodity Futures (CTAs)',
        icon: 'CTA',
        description: 'Systematic trend-following in futures markets.',
        expectedReturn: '8–15 % (uncorrelated)',
        risk: 'High',
        liquidity: 'High',
        minInvestment: '$100 k'
      },
      {
        name: 'Agricultural Commodity ETF',
        icon: 'CORN',
        description: 'Focused exposure to grains, livestock, and soft commodities.',
        expectedReturn: '5–12 %',
        risk: 'High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Precious Metals Storage & Streaming',
        icon: 'STRM',
        description: 'Physical gold/silver storage plus mining royalty streams.',
        expectedReturn: '6–12 %',
        risk: 'Medium-High',
        liquidity: 'Medium',
        minInvestment: '$25 k'
      }
    ]
  },

  /* ---------------------------------------------------------------------
     5. ALTERNATIVE INVESTMENTS
  --------------------------------------------------------------------- */
  'hedge-funds': {
    title: 'Hedge Funds',
    category: 'Alternative Investments',
    breadcrumb: 'Alternative Investments > Hedge Funds',
    investments: [
      {
        name: 'Multi-Strategy (Global Macro + L/S)',
        icon: 'MULTI',
        description: 'Diversified across relative value, macro, credit.',
        expectedReturn: '8–12 % net',
        risk: 'Medium-High',
        liquidity: 'Quarterly',
        minInvestment: '$1 M'
      },
      {
        name: 'Long/Short Equity (Market Neutral)',
        icon: 'L/S-MN',
        description: 'Beta ≈ 0, factor-based stock selection.',
        expectedReturn: '6–10 % net',
        risk: 'Medium',
        liquidity: 'Monthly',
        minInvestment: '$250 k'
      },
      {
        name: 'Event-Driven (Merger Arbitrage)',
        icon: 'MNA',
        description: 'Long target, short acquirer deals.',
        expectedReturn: '7–10 % net',
        risk: 'Medium',
        liquidity: 'Monthly',
        minInvestment: '$250 k'
      },
      {
        name: 'Fixed-Income Relative Value',
        icon: 'RV',
        description: 'Basis trades, curve arbitrage, capital structure.',
        expectedReturn: '6–9 % net',
        risk: 'Medium',
        liquidity: 'Monthly',
        minInvestment: '$1 M'
      },
      {
        name: 'Quant Equity Market Neutral',
        icon: 'Q-MN',
        description: 'Statistical arbitrage using ML/AI signals.',
        expectedReturn: '8–12 % net',
        risk: 'Medium',
        liquidity: 'Weekly',
        minInvestment: '$1 M'
      },
      {
        name: 'CTA / Managed Futures',
        icon: 'CTA',
        description: 'Trend-following across asset classes.',
        expectedReturn: '7–12 % net (crisis alpha)',
        risk: 'High',
        liquidity: 'Daily',
        minInvestment: '$100 k'
      }
    ]
  },

  'private-credit': {
    title: 'Private Credit',
    category: 'Alternative Investments',
    breadcrumb: 'Alternative Investments > Private Credit',
    investments: [
      {
        name: 'Senior Direct Lending (1st Lien)',
        icon: 'SDL',
        description: 'Floating-rate loans to mid-market companies.',
        expectedReturn: 'SOFR + 500–650 bps',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      },
      {
        name: 'Unitranche (Stretch Senior)',
        icon: 'UNIT',
        description: 'Single tranche combining senior & sub debt.',
        expectedReturn: 'SOFR + 700–900 bps',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$500 k'
      },
      {
        name: 'Mezzanine Debt (Warrants)',
        icon: 'MEZ',
        description: 'Subordinated debt with equity kickers.',
        expectedReturn: '12–16 % cash + 3–5 % equity upside',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      },
      {
        name: 'Asset-Based Lending (ABL)',
        icon: 'ABL',
        description: 'Revolver secured by receivables & inventory.',
        expectedReturn: 'SOFR + 400–600 bps',
        risk: 'Medium',
        liquidity: 'Low',
        minInvestment: '$1 M'
      },
      {
        name: 'Specialty Finance (Consumer Installment)',
        icon: 'SPEC',
        description: 'Fintech loan originator financing.',
        expectedReturn: '10–14 %',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$250 k'
      }
    ]
  },

  'infrastructure': {
    title: 'Infrastructure',
    category: 'Alternative Investments',
    breadcrumb: 'Alternative Investments > Infrastructure',
    investments: [
      {
        name: 'Core Infrastructure (Toll Roads, Utilities)',
        icon: 'CORE-INF',
        description: 'Long-duration, inflation-linked cash flows.',
        expectedReturn: '8–11 % net IRR',
        risk: 'Low-Medium',
        liquidity: 'Very Low',
        minInvestment: '$5 M'
      },
      {
        name: 'Renewable Energy (Solar & Wind)',
        icon: 'RENEW',
        description: 'Operational solar PV and on-shore wind farms.',
        expectedReturn: '9–13 % net IRR',
        risk: 'Medium',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      },
      {
        name: 'Digital Infrastructure (Fiber, Data Centers)',
        icon: 'DIG-INF',
        description: 'Fiber networks, hyperscale data centers.',
        expectedReturn: '10–14 % net IRR',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$1 M'
      },
      {
        name: 'PPP – Social Infrastructure (Schools, Hospitals)',
        icon: 'PPP',
        description: '25–35 yr availability-payment concessions.',
        expectedReturn: '7–10 % net IRR',
        risk: 'Low-Medium',
        liquidity: 'Very Low',
        minInvestment: '$5 M'
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
        description: 'Blue-chip contemporary and modern art through galleries, auctions, or fractional platforms.',
        expectedReturn: '6–12 % (Artprice indices)',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$1,000 (fractional) - $50k+ (direct)'
      },
      {
        name: 'Luxury Watches',
        icon: 'WATCH',
        description: 'Rolex, Patek Philippe, and other prestigious timepieces.',
        expectedReturn: '8–15 %',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$5,000'
      },
      {
        name: 'Vintage Wine & Spirits',
        icon: 'WINE',
        description: 'Investment-grade wine collections and rare whisky from top distilleries.',
        expectedReturn: '8–18 %',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$500 (per bottle/cask)'
      },
      {
        name: 'Classic & Exotic Cars',
        icon: 'CAR',
        description: 'Collectible automobiles with proven appreciation track records.',
        expectedReturn: '6–15 % (cyclical)',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$25,000'
      },
      {
        name: 'Sports Cards & Memorabilia',
        icon: 'CARD',
        description: 'Graded trading cards and authenticated sports memorabilia.',
        expectedReturn: '10–30 % (speculative)',
        risk: 'Extremely High',
        liquidity: 'Medium',
        minInvestment: '$100'
      },
      {
        name: 'Rare Books & Manuscripts',
        icon: 'BOOK',
        description: 'First editions, historical documents, and literary manuscripts.',
        expectedReturn: '5–12 %',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$1,000'
      },
      {
        name: 'Coins & Precious Metals',
        icon: 'COIN',
        description: 'Numismatic coins, bullion, and precious metal collectibles.',
        expectedReturn: '4–10 %',
        risk: 'Medium-High',
        liquidity: 'Medium',
        minInvestment: '$500'
      }
    ]
  },

  'royalties': {
    title: 'Royalties',
    category: 'Alternative Investments',
    breadcrumb: 'Alternative Investments > Royalties',
    investments: [
      {
        name: 'Music Royalties (Top-10,000 Spotify)',
        icon: 'MUS',
        description: 'Rights to master & publishing income.',
        expectedReturn: '8–14 % cash yield',
        risk: 'Medium',
        liquidity: 'Low',
        minInvestment: '$1,000'
      },
      {
        name: 'Pharmaceutical Drug Royalties',
        icon: 'PHARMA',
        description: 'Revenue share on approved drugs.',
        expectedReturn: '12–20 % IRR',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$100 k'
      },
      {
        name: 'Mineral Royalties (Shale Oil)',
        icon: 'MIN',
        description: 'Overriding royalty interest in producing wells.',
        expectedReturn: '10–20 % cash yield',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$50 k'
      },
      {
        name: 'Film & TV Content Royalties',
        icon: 'FILM',
        description: 'Revenue participation in streaming and theatrical content.',
        expectedReturn: '6–15 % IRR',
        risk: 'High',
        liquidity: 'Very Low',
        minInvestment: '$25 k'
      },
      {
        name: 'Patent Royalties (Tech IP)',
        icon: 'PAT',
        description: 'Licensing revenue from technology patents and IP portfolios.',
        expectedReturn: '8–18 % IRR',
        risk: 'Medium-High',
        liquidity: 'Very Low',
        minInvestment: '$100 k'
      }
    ]
  },

  'structured-products': {
    title: 'Structured Products',
    category: 'Alternative Investments',
    breadcrumb: 'Alternative Investments > Structured Products',
    investments: [
      {
        name: 'Principal-Protected Notes',
        icon: 'PPN',
        description: 'Capital protection with upside participation in equity or commodity indices.',
        expectedReturn: '0–12 %',
        risk: 'Low-Medium',
        liquidity: 'Low',
        minInvestment: '$10,000'
      },
      {
        name: 'Auto-Callable Notes',
        icon: 'ACN',
        description: 'Early redemption features with barrier protection and enhanced yields.',
        expectedReturn: '6–15 % (if not called)',
        risk: 'Medium-High',
        liquidity: 'Low',
        minInvestment: '$10,000'
      },
      {
        name: 'Market-Linked CDs',
        icon: 'MLCD',
        description: 'FDIC-insured certificates with equity or commodity upside.',
        expectedReturn: '0–10 %',
        risk: 'Low',
        liquidity: 'Low',
        minInvestment: '$1,000'
      },
      {
        name: 'Reverse Convertible Notes',
        icon: 'RCN',
        description: 'High coupon notes with downside equity risk below barrier.',
        expectedReturn: '8–20 % (coupon dependent)',
        risk: 'High',
        liquidity: 'Low',
        minInvestment: '$10,000'
      },
      {
        name: 'Barrier Options Products',
        icon: 'BAR',
        description: 'Knock-in/knock-out features with enhanced or reduced payoffs.',
        expectedReturn: '0–30 %',
        risk: 'High',
        liquidity: 'Low',
        minInvestment: '$25,000'
      },
      {
        name: 'Insurance-Linked Securities',
        icon: 'ILS',
        description: 'Catastrophe bonds and other securities tied to insurance events.',
        expectedReturn: '5–15 %',
        risk: 'Medium-High',
        liquidity: 'Low',
        minInvestment: '$100,000'
      }
    ]
  },

  /* ---------------------------------------------------------------------
     6. DIGITAL ASSETS
  --------------------------------------------------------------------- */
  'cryptocurrencies': {
    title: 'Cryptocurrencies',
    category: 'Digital Assets',
    breadcrumb: 'Digital Assets > Cryptocurrencies',
    investments: [
      {
        name: 'Bitcoin (BTC)',
        icon: 'BTC',
        description: 'Digital gold and store of value, available via spot ETFs or direct purchase.',
        expectedReturn: '-50 % to +300 %',
        risk: 'Very High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Ethereum (ETH)',
        icon: 'ETH',
        description: 'Smart contract platform and basis for DeFi ecosystem.',
        expectedReturn: '-60 % to +400 %',
        risk: 'Very High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Large-Cap Altcoins',
        icon: 'ALT1',
        description: 'Established cryptocurrencies like BNB, XRP, ADA, SOL with proven utility.',
        expectedReturn: '-70 % to +500 %',
        risk: 'Extremely High',
        liquidity: 'High',
        minInvestment: '$1'
      },
      {
        name: 'Layer-2 & Scaling Solutions',
        icon: 'L2',
        description: 'Tokens for blockchain scaling solutions and rollup networks.',
        expectedReturn: '-80 % to +1,000 %',
        risk: 'Extremely High',
        liquidity: 'Medium-High',
        minInvestment: '$1'
      },
      {
        name: 'DeFi Tokens',
        icon: 'DEFI',
        description: 'Governance tokens for decentralized finance protocols.',
        expectedReturn: '-90 % to +2,000 %',
        risk: 'Extremely High',
        liquidity: 'Medium-High',
        minInvestment: '$1'
      },
      {
        name: 'Meme Coins',
        icon: 'MEME',
        description: 'Highly speculative community-driven tokens with viral potential.',
        expectedReturn: '-99 % to +10,000 %',
        risk: 'Extremely High',
        liquidity: 'Medium',
        minInvestment: '$1'
      }
    ]
  },

  'nfts': {
    title: 'Non-Fungible Tokens (NFTs)',
    category: 'Digital Assets',
    breadcrumb: 'Digital Assets > NFTs',
    investments: [
      {
        name: 'CryptoPunks',
        icon: 'PUNK',
        description: '10 k unique 24×24 pixel avatars.',
        expectedReturn: '-90 % to +1,000 %',
        risk: 'Extremely High',
        liquidity: 'Very Low',
        minInvestment: '$1,000'
      },
      {
        name: 'Art Blocks Curated',
        icon: 'BLOCKS',
        description: 'Generative on-chain art.',
        expectedReturn: '-95 % to +500 %',
        risk: 'Extremely High',
        liquidity: 'Very Low',
        minInvestment: '$100'
      },
      {
        name: 'Gaming NFTs (Axie Infinity Land)',
        icon: 'GAME',
        description: 'Play-to-earn game assets.',
        expectedReturn: '-99 % to +500 %',
        risk: 'Extremely High',
        liquidity: 'Very Low',
        minInvestment: '$10'
      },
      {
        name: 'Music NFTs (Catalog Works)',
        icon: 'MUSIC-NFT',
        description: 'Tokenised share of song royalties.',
        expectedReturn: '0–300 %',
        risk: 'Extremely High',
        liquidity: 'Very Low',
        minInvestment: '$50'
      }
    ]
  },

  'defi': {
    title: 'Decentralised Finance (DeFi)',
    category: 'Digital Assets',
    breadcrumb: 'Digital Assets > DeFi',
    investments: [
      {
        name: 'Blue-Chip Yield Farming (Curve, Aave)',
        icon: 'YF-BLUE',
        description: 'Stablecoin lending or LP staking.',
        expectedReturn: '5–10 % APY',
        risk: 'High (smart-contract risk)',
        liquidity: 'High',
        minInvestment: '$100'
      },
      {
        name: 'Liquidity Provision – ETH/USDC',
        icon: 'LP-V2',
        description: 'Uniswap v2 50/50 pool.',
        expectedReturn: '15–40 % (impermanent loss risk)',
        risk: 'Very High',
        liquidity: 'High',
        minInvestment: '$100'
      },
      {
        name: 'Liquid-Staking Tokens (Lido stETH)',
        icon: 'LST',
        description: 'Receive liquid receipt token while earning staking yield.',
        expectedReturn: '3–5 % ETH staking yield',
        risk: 'Medium-High',
        liquidity: 'High',
        minInvestment: '$10'
      },
      {
        name: 'DeFi Options Vaults (DOV)',
        icon: 'DOV',
        description: 'Automated covered-call strategies.',
        expectedReturn: '20–50 % (volatile)',
        risk: 'Very High',
        liquidity: 'Medium',
        minInvestment: '$100'
      }
    ]
  },

  'crypto-mining': {
    title: 'Cryptocurrency Mining',
    category: 'Digital Assets',
    breadcrumb: 'Digital Assets > Crypto Mining',
    investments: [
      {
        name: 'Bitcoin ASIC Hosting (Own Hardware)',
        icon: 'ASIC',
        description: 'Buy S19XP, hosted in Texas facility.',
        expectedReturn: '0–30 % (power cost & BTC price)',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$5,000'
      },
      {
        name: 'Cloud Mining Contract (1-yr)',
        icon: 'CLD',
        description: 'Pre-paid hash-rate with daily payouts.',
        expectedReturn: '-20 % to +100 %',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$500'
      },
      {
        name: 'Ethereum Staking Pool (Rocket Pool)',
        icon: 'RPL',
        description: 'Run 16 ETH minipool or delegate.',
        expectedReturn: '3.5 – 5 % ETH-denominated',
        risk: 'Medium-High',
        liquidity: 'Medium (rETH redeemable)',
        minInvestment: '$3,200 (0.1 ETH via pool)'
      },
      {
        name: 'Mining Stock ETF (WGMI)',
        icon: 'WGMI',
        description: 'Diversified exposure to publicly traded mining companies.',
        expectedReturn: '0–50 % (beta to crypto)',
        risk: 'Very High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Green Mining (Renewable Energy)',
        icon: 'GRN-BTC',
        description: 'Carbon-neutral Bitcoin mining using solar/wind power.',
        expectedReturn: '5–25 % (ESG premium)',
        risk: 'Very High',
        liquidity: 'Very Low',
        minInvestment: '$10,000'
      }
    ]
  },

  'stablecoins': {
    title: 'Stablecoins',
    category: 'Digital Assets',
    breadcrumb: 'Digital Assets > Stablecoins',
    investments: [
      {
        name: 'USD Coin (USDC) – Coinbase Rewards',
        icon: 'USDC',
        description: 'Fully-backed USD stablecoin.',
        expectedReturn: '4–5 % (custodial staking)',
        risk: 'Low',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'DAI Savings Rate (DSR)',
        icon: 'DAI',
        description: 'Decentralised stablecoin via Maker protocol.',
        expectedReturn: '6–8 % (governance variable)',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'T-Bill Backed Stablecoin (e.g., Ondo OUSG)',
        icon: 'OUSG',
        description: 'Tokenised short-term Treasury ETF.',
        expectedReturn: '4.8 – 5.2 %',
        risk: 'Low',
        liquidity: 'High',
        minInvestment: '$100'
      },
      {
        name: 'Tether (USDT) High-Yield Lending',
        icon: 'USDT',
        description: 'Lending USDT on centralized exchanges for margin trading.',
        expectedReturn: '8–15 % (rate variable)',
        risk: 'Medium-High',
        liquidity: 'High',
        minInvestment: '$100'
      },
      {
        name: 'Frax Finance (FRAX)',
        icon: 'FRAX',
        description: 'Algorithmic stablecoin with fractional reserve backing.',
        expectedReturn: '3–7 % (protocol rewards)',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      }
    ]
  },

  /* ---------------------------------------------------------------------
     7. DERIVATIVES
  --------------------------------------------------------------------- */
  'options': {
    title: 'Options',
    category: 'Derivatives',
    breadcrumb: 'Derivatives > Options',
    investments: [
      {
        name: 'Covered-Call ETF (JEPI)',
        icon: 'JEPI',
        description: 'Equity index + monthly call overwriting.',
        expectedReturn: '7–10 %',
        risk: 'Medium',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Zero-Day-to-Expiry (0DTE) S&P 500',
        icon: '0DTE',
        description: 'Daily options with extreme leverage.',
        expectedReturn: '-100 % to +500 %',
        risk: 'Extremely High',
        liquidity: 'Very High',
        minInvestment: '$1 (1 contract ≈ $50 premium)'
      },
      {
        name: 'Long-Dated LEAPS (2-yr call)',
        icon: 'LEAPS',
        description: 'Deep ITM call options on indices.',
        expectedReturn: '0–200 %',
        risk: 'Very High',
        liquidity: 'High',
        minInvestment: '$100'
      },
      {
        name: 'Volatility ETF (VIX)',
        icon: 'VIX',
        description: 'Short-term VIX futures ETN.',
        expectedReturn: '-50 % to +200 % (decay)',
        risk: 'Extremely High',
        liquidity: 'Very High',
        minInvestment: '$1'
      }
    ]
  },

  'futures': {
    title: 'Futures',
    category: 'Derivatives',
    breadcrumb: 'Derivatives > Futures',
    investments: [
      {
        name: 'E-mini S&P 500 Futures',
        icon: 'ES',
        description: 'Notional ≈ $220 k, 50× leverage.',
        expectedReturn: '-50 % to +100 %',
        risk: 'Very High',
        liquidity: 'Very High',
        minInvestment: '$12 k (initial margin)'
      },
      {
        name: 'Micro-Bitcoin Futures',
        icon: 'MBT',
        description: 'CME 1/10 BTC contract.',
        expectedReturn: '-90 % to +500 %',
        risk: 'Extremely High',
        liquidity: 'High',
        minInvestment: '$1,000 (margin)'
      },
      {
        name: 'Commodity Futures (Corn, Wheat, Soy)',
        icon: 'GRN-FUT',
        description: 'Agricultural futures on CBOT.',
        expectedReturn: '-30 % to +50 %',
        risk: 'Very High',
        liquidity: 'Very High',
        minInvestment: '$2,000 (margin)'
      },
      {
        name: 'Interest-Rate Futures (2-yr, 10-yr Treasury)',
        icon: 'ZN',
        description: 'Speculate on rate moves.',
        expectedReturn: '-20 % to +20 %',
        risk: 'Very High',
        liquidity: 'Very High',
        minInvestment: '$2,000'
      }
    ]
  },

  'swaps': {
    title: 'Swaps',
    category: 'Derivatives',
    breadcrumb: 'Derivatives > Swaps',
    investments: [
      {
        name: 'Plain-Vanilla Interest-Rate Swap',
        icon: 'IRS',
        description: 'Exchange fixed vs floating (SOFR).',
        expectedReturn: '-10 % to +20 % (mark-to-market)',
        risk: 'Medium-High',
        liquidity: 'Medium',
        minInvestment: '$1 M notional (ISDA)'
      },
      {
        name: 'Cross-Currency Basis Swap (USD/JPY)',
        icon: 'CCS',
        description: 'Exchange USD LIBOR vs JPY TONA.',
        expectedReturn: 'Spread-driven',
        risk: 'Medium-High',
        liquidity: 'Medium',
        minInvestment: '$5 M notional'
      },
      {
        name: 'Total-Return Swap on S&P 500',
        icon: 'TRS',
        description: 'Synthetic exposure without ownership.',
        expectedReturn: 'Index ± spread',
        risk: 'Very High',
        liquidity: 'Medium',
        minInvestment: '$1 M'
      },
      {
        name: 'Credit Default Swap (IG Corporate)',
        icon: 'CDS',
        description: 'Protection against corporate default risk.',
        expectedReturn: 'Premium collection - losses',
        risk: 'High',
        liquidity: 'Medium',
        minInvestment: '$1 M notional'
      },
      {
        name: 'Commodity Swap (WTI Oil)',
        icon: 'COMSW',
        description: 'Fixed vs floating crude oil price exposure.',
        expectedReturn: 'Commodity price differential',
        risk: 'Very High',
        liquidity: 'Medium',
        minInvestment: '$100 k notional'
      }
    ]
  },

  'warrants': {
    title: 'Warrants',
    category: 'Derivatives',
    breadcrumb: 'Derivatives > Warrants',
    investments: [
      {
        name: 'Long-Dated Stock Warrants (SPAC)',
        icon: 'SPAC-W',
        description: '5-yr expiry, 1:1 conversion, high leverage.',
        expectedReturn: '-100 % to +1,000 %',
        risk: 'Very High',
        liquidity: 'Low-Medium',
        minInvestment: '$100'
      },
      {
        name: 'Biotech PIPE Warrants',
        icon: 'BIOT-W',
        description: 'Attached to private placements.',
        expectedReturn: '-100 % to +500 %',
        risk: 'Extremely High',
        liquidity: 'Very Low',
        minInvestment: '$1 k'
      },
      {
        name: 'Covered Call Warrants',
        icon: 'CCW',
        description: 'European-style warrants on major indices.',
        expectedReturn: '-100 % to +200 %',
        risk: 'Very High',
        liquidity: 'Medium',
        minInvestment: '$500'
      },
      {
        name: 'Turbo/Knock-Out Warrants',
        icon: 'TKO',
        description: 'Barrier options with automatic expiry features.',
        expectedReturn: '-100 % to +300 %',
        risk: 'Extremely High',
        liquidity: 'Medium',
        minInvestment: '$200'
      },
      {
        name: 'Currency Warrants (EUR/USD)',
        icon: 'FX-W',
        description: 'Levered exposure to foreign exchange movements.',
        expectedReturn: '-100 % to +150 %',
        risk: 'Very High',
        liquidity: 'Medium',
        minInvestment: '$1,000'
      }
    ]
  },

  'forex': {
    title: 'Foreign Exchange',
    category: 'Derivatives',
    breadcrumb: 'Derivatives > Forex',
    investments: [
      {
        name: 'Major Currency Pairs',
        icon: 'MAJ',
        description: 'EUR/USD, GBP/USD, USD/JPY, USD/CHF with tight spreads and high liquidity.',
        expectedReturn: '-50 % to +100 %',
        risk: 'Very High',
        liquidity: 'Very High',
        minInvestment: '$100'
      },
      {
        name: 'Minor Currency Pairs',
        icon: 'MIN',
        description: 'Cross-currency pairs like EUR/GBP, GBP/JPY without USD.',
        expectedReturn: '-60 % to +120 %',
        risk: 'Very High',
        liquidity: 'High',
        minInvestment: '$100'
      },
      {
        name: 'Emerging Market Currencies',
        icon: 'EM-FX',
        description: 'High-yielding but volatile currencies like TRY, MXN, BRL, ZAR.',
        expectedReturn: '-70 % to +200 %',
        risk: 'Extremely High',
        liquidity: 'High',
        minInvestment: '$100'
      },
      {
        name: 'Carry Trade Strategies',
        icon: 'CARRY',
        description: 'Borrowing low-yield currencies to fund high-yield currency positions.',
        expectedReturn: '-30 % to +80 %',
        risk: 'High',
        liquidity: 'Very High',
        minInvestment: '$1,000'
      },
      {
        name: 'Currency ETFs',
        icon: 'CUR-ETF',
        description: 'Unleveraged exposure to foreign currencies via ETFs.',
        expectedReturn: '-25 % to +50 %',
        risk: 'Medium-High',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Forex Options',
        icon: 'FXOPT',
        description: 'Currency options for hedging or speculation with defined risk.',
        expectedReturn: '-100 % to +300 %',
        risk: 'Very High',
        liquidity: 'Medium',
        minInvestment: '$500'
      }
    ]
  },

  /* ---------------------------------------------------------------------
     8. CASH & CASH EQUIVALENTS
  --------------------------------------------------------------------- */
  'savings-accounts': {
    title: 'Savings Accounts',
    category: 'Cash & Cash Equivalents',
    breadcrumb: 'Cash & Cash Equivalents > Savings Accounts',
    investments: [
      {
        name: 'High-Yield Online Savings',
        icon: 'HYS',
        description: 'FDIC-insured up to $250 k.',
        expectedReturn: '4.0 – 4.6 % APY',
        risk: 'Very Low',
        liquidity: 'Very High',
        minInvestment: '$0'
      },
      {
        name: 'Treasury-Only Money-Market Fund',
        icon: 'GVT-MM',
        description: '100 % T-Bills, 7-day SEC yield.',
        expectedReturn: '4.9 – 5.3 %',
        risk: 'Very Low',
        liquidity: 'Very High',
        minInvestment: '$1 k'
      },
      {
        name: 'Cash-Management Brokerage Sweep',
        icon: 'SWEEP',
        description: 'Auto-sweep to money-market.',
        expectedReturn: '4.7 – 5.1 %',
        risk: 'Very Low',
        liquidity: 'Very High',
        minInvestment: '$1'
      },
      {
        name: 'Credit Union High-Yield Savings',
        icon: 'CU-HY',
        description: 'NCUA-insured member-owned financial cooperatives.',
        expectedReturn: '4.2 – 4.8 % APY',
        risk: 'Very Low',
        liquidity: 'Very High',
        minInvestment: '$5 (membership fee)'
      },
      {
        name: 'Foreign Bank USD Savings (Singapore)',
        icon: 'FOR-SGD',
        description: 'USD deposits in politically stable foreign banks.',
        expectedReturn: '3.8 – 4.5 %',
        risk: 'Low',
        liquidity: 'High',
        minInvestment: '$10,000'
      }
    ]
  },

  'cds': {
    title: 'Certificates of Deposit',
    category: 'Cash & Cash Equivalents',
    breadcrumb: 'Cash & Cash Equivalents > Certificates of Deposit',
    investments: [
      {
        name: 'No-Penalty CD (11-month)',
        icon: 'NPCD',
        description: 'FDIC-insured, early withdrawal allowed.',
        expectedReturn: '4.5 – 4.9 % APY',
        risk: 'Very Low',
        liquidity: 'Medium',
        minInvestment: '$1 k'
      },
      {
        name: 'Brokered CD (5-yr)',
        icon: 'BR-CD',
        description: 'Tradeable on secondary market.',
        expectedReturn: '4.1 – 4.4 % APY',
        risk: 'Very Low',
        liquidity: 'Medium',
        minInvestment: '$1 k'
      },
      {
        name: 'Jumbo CD ($100 k+, 1-yr)',
        icon: 'JUMBO',
        description: 'Negotiated rates at banks.',
        expectedReturn: '4.8 – 5.2 % APY',
        risk: 'Very Low',
        liquidity: 'Low',
        minInvestment: '$100 k'
      },
      {
        name: 'Bump-Up CD (2-year)',
        icon: 'BUMP',
        description: 'Option to increase rate once during term.',
        expectedReturn: '4.0 – 4.6 % APY',
        risk: 'Very Low',
        liquidity: 'Very Low',
        minInvestment: '$1 k'
      },
      {
        name: 'Foreign Currency CD (EUR)',
        icon: 'FX-CD',
        description: 'Euro-denominated CDs with currency risk.',
        expectedReturn: '3.0 – 3.5 % + FX gain/loss',
        risk: 'Low',
        liquidity: 'Low',
        minInvestment: '€10,000'
      }
    ]
  },

  'money-market': {
    title: 'Money-Market Instruments',
    category: 'Cash & Cash Equivalents',
    breadcrumb: 'Cash & Cash Equivalents > Money Market',
    investments: [
      {
        name: 'Prime Money-Market Fund',
        icon: 'PRIME-MM',
        description: 'Commercial paper + CDs, 7-day SEC yield.',
        expectedReturn: '5.0 – 5.4 %',
        risk: 'Very Low',
        liquidity: 'Very High',
        minInvestment: '$1 k'
      },
      {
        name: 'Commercial Paper (30-day)',
        icon: 'CP-30',
        description: 'Top-tier corporates (A1/P1).',
        expectedReturn: '5.2 – 5.4 %',
        risk: 'Low',
        liquidity: 'Medium',
        minInvestment: '$100 k'
      },
      {
        name: 'Repo Agreements',
        icon: 'REPO',
        description: 'Overnight Treasuries repo.',
        expectedReturn: '5.3 %',
        risk: 'Very Low',
        liquidity: 'Very High',
        minInvestment: '$1 M (institutional)'
      },
      {
        name: 'Banker\'s Acceptances',
        icon: 'BA',
        description: 'Trade finance instruments guaranteed by banks.',
        expectedReturn: '5.0 – 5.2 %',
        risk: 'Very Low',
        liquidity: 'Medium',
        minInvestment: '$100 k'
      },
      {
        name: 'Federal Agency Discount Notes',
        icon: 'FADN',
        description: 'Short-term unsecured debt from GSEs like FHLB.',
        expectedReturn: '5.1 – 5.3 %',
        risk: 'Very Low',
        liquidity: 'High',
        minInvestment: '$25 k'
      }
    ]
  },

  'treasury-bills': {
    title: 'U.S. Treasury Bills',
    category: 'Cash & Cash Equivalents',
    breadcrumb: 'Cash & Cash Equivalents > Treasury Bills',
    investments: [
      {
        name: 'Treasury Bills (4-week to 1-year)',
        icon: 'TBILL',
        description: 'Short-term government discount securities with maturities from 4 weeks to 52 weeks.',
        expectedReturn: '4.9 – 5.3 % (maturity dependent)',
        risk: 'Very Low',
        liquidity: 'Very High',
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
        name: 'Tier-1 Corporate CP (Apple, J&J)',
        icon: 'CP-A1',
        description: '30–270 day unsecured notes.',
        expectedReturn: '5.2 – 5.4 %',
        risk: 'Low',
        liquidity: 'Medium',
        minInvestment: '$100 k'
      },
      {
        name: 'Asset-Backed Commercial Paper (ABCP)',
        icon: 'ABCP',
        description: 'Conduits with liquidity backstop.',
        expectedReturn: '5.3 – 5.6 %',
        risk: 'Low-Medium',
        liquidity: 'Medium',
        minInvestment: '$250 k'
      },
      {
        name: 'Financial Institution CP',
        icon: 'FI-CP',
        description: 'Bank holding company short-term funding.',
        expectedReturn: '5.4 – 5.7 %',
        risk: 'Low-Medium',
        liquidity: 'Medium',
        minInvestment: '$100 k'
      },
      {
        name: 'Euro-Commercial Paper (ECP)',
        icon: 'ECP',
        description: 'USD-denominated CP issued in European markets.',
        expectedReturn: '5.1 – 5.3 %',
        risk: 'Low',
        liquidity: 'Medium',
        minInvestment: '$500 k'
      },
      {
        name: 'Tax-Exempt Commercial Paper',
        icon: 'TE-CP',
        description: 'Short-term municipal notes for working capital.',
        expectedReturn: '3.2 – 3.8 % tax-free',
        risk: 'Low',
        liquidity: 'Medium',
        minInvestment: '$100 k'
      }
    ]
  }
};

/* =========================================================================
   END OF FILE
   ========================================================================= */