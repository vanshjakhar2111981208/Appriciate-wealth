const tf = require('@tensorflow/tfjs-node');

// Encode categorical features
function oneHotEncode(data, column) {
    const uniqueValues = [...new Set(data.map(d => d[column]))];
    return data.map(d => {
        const encoding = uniqueValues.map(value => (value === d[column] ? 1 : 0));
        return encoding;
    });
}

// Prepare the data for TensorFlow.js
function prepareData(transactions) {
    const inputs = transactions.map(d => [
        d.transaction_amount,
        d.customer_age,
        ...oneHotEncode(transactions, 'merchant_category')[transactions.indexOf(d)],
        ...oneHotEncode(transactions, 'customer_demographics')[transactions.indexOf(d)],
    ]);

    const labels = transactions.map(d => d.fraud_label);

    const inputTensor = tf.tensor2d(inputs);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    return { inputTensor, labelTensor };
}

// Create the Neural Network model
async function createModel() {
    const model = tf.sequential();

    model.add(tf.layers.dense({ inputShape: [inputFeatures], units: 16, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' })); // Output layer

    model.compile({
        optimizer: tf.train.adam(),
        loss: 'binaryCrossentropy',
        metrics: ['accuracy']
    });

    return model;
}

// Train the model
async function trainModel(model, inputTensor, labelTensor) {
    return await model.fit(inputTensor, labelTensor, {
        epochs: 10,
        batchSize: 32,
        validationSplit: 0.2
    });
}

module.exports = {
    createModel,
    trainModel,
    prepareData
};