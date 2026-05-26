/**
 * PORTFOLIO PERFORMANCE - SINGLE SOURCE OF TRUTH
 * Update these values once, and they automatically update across all pages
 * Last Updated: May 26, 2026
 */

const portfolioMetrics = {
    // Hero Stats (displayed at top of index & algorithm pages)
    heroStats: {
        winRate: "80.4%",
        profitFactor: "5.35×",
        sharpeRatio: "14.47",
        calmarRatio: "258.93"
    },

    // Cumulative Portfolio Ratios
    ratios: {
        sharpe: 14.47,
        sortino: 120.65,
        calmar: 258.93,
        profitFactor: 5.35
    },

    // Cumulative Performance Data
    performance: {
        winRate: 80.4,
        winLossRatio: "41:10",
        wins: 41,
        losses: 10,
        totalTrades: 51,
        avgProfitPercent: 862.61,
        maxDrawdown: "₹15,263.71",
        maxDrawdownValue: 15263.71
    },

    // YTD Performance (for index page)
    ytd: {
        return: "117%",
        returnValue: 117
    },

    // Trading Days & Returns
    trading: {
        expiryDayReturn: "15%",
        nonExpiryReturn: "~2%"
    },

    // Risk Parameters
    risk: {
        maxDailyLoss: "9%",
        stopLoss: "30%",
        profitTarget: "100%",
        capitalPerTrade: "10%"
    },

    // Minimum Investment
    minimumInvestment: "₹10 Lakhs",

    // Fees
    fees: {
        setupFee: "₹1,00,000",
        performanceFeeStandard: "30%",
        performanceFeeLoyalty: "25%"
    }
};

/**
 * FUNCTION: Get formatted metric for display
 * Usage: getMetric('heroStats.winRate') returns "80.4%"
 */
function getMetric(path) {
    const keys = path.split('.');
    let value = portfolioMetrics;
    
    for (let key of keys) {
        value = value[key];
        if (value === undefined) return 'N/A';
    }
    
    return value;
}

/**
 * FUNCTION: Update metrics across all pages
 * Call this function to refresh all displayed metrics
 */
function updateAllMetrics() {
    // Update hero stats on index page
    const heroStats = document.querySelectorAll('[data-metric]');
    heroStats.forEach(el => {
        const metric = el.getAttribute('data-metric');
        el.textContent = getMetric(metric);
    });
}

/**
 * FUNCTION: Initialize metrics on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    updateAllMetrics();
});

/**
 * HOW TO UPDATE METRICS:
 * 
 * 1. Edit the values above in portfolioMetrics object
 * 2. Save this file
 * 3. All pages automatically update within seconds
 * 
 * EXAMPLE - To update Win Rate:
 * Change: winRate: "80.4%"
 * To:     winRate: "85.0%"
 * 
 * EXAMPLE - To update Sharpe Ratio:
 * Change: sharpe: 14.47
 * To:     sharpe: 15.23
 */
