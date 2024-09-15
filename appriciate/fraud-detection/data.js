const fs = require('fs');
const csv = require('csv-parser');
const tf = require('@tensorflow/tfjs-node');

// Load and preprocess dataset
function loadData() {
    return new Promise((resolve, reject) => {
        const transactions = [];
        fs.createReadStream('data.csv')
            .pipe(csv())
            .on('data', (row) => {
                transactions.push({
                    transaction_amount: parseFloat(row.transaction_amount),
                    merchant_category: row.merchant_category,
                    customer_age: parseFloat(row.customer_age),
                    customer_demographics: row.customer_demographics,
                    fraud_label: parseInt(row.fraud_label)
                });
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
                resolve(transactions);
            })
            .on('error', (err) => reject(err));
    });
}

// Function to normalize data (optional, based on your dataset)
function normalizeData(transactions) {
    // Example: You can scale `transaction_amount` between 0 and 1.
    const maxAmount = Math.max(...transactions.map(d => d.transaction_amount));
    const normalizedData = transactions.map(d => ({
        ...d,
        transaction_amount: d.transaction_amount / maxAmount,
    }));
    return normalizedData;
}

module.exports = {
    loadData,
    normalizeData
};