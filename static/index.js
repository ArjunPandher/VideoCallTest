var model;

// Loads image from storage
async function loadImage(path){
    const image = new Image;
    image.src = path;
    image.onload = () => {
        console.log(tf.browser.fromPixels(image));
        getTensor(image);
    }
}

// Gets 20x20x3 tensor from image source
function getTensor(image){
    return tf.browser.fromPixels(image)
}

// Configers our model
function setModel(){
    model = tf.sequential();

    model.add(tf.layers.dense(
        {
            inputShape: 4,
            activation: 'sigmoid',
            units: 10
        }
    ));
    
    model.add(tf.layers.dense(
        {
            inputShape: 10,
            units: 3,
            activation: 'softmax'
        }
    ));
}

// Trains the model
async function trainModel(){
    for(let i=0;i<15;i++){
      const res = await model.fit(trainingData, outputData, {epochs: 40});
    }
}

// Saves our model locally
async function saveModel(){
    await model.save('file:///static/model'); // in Node.js
}

// Set our training set here
// const trainingData = tf.tensor2d(
//     trainingSet.map(item => [
//       item.sepal_length,
//       item.sepal_width,
//       item.petal_length,
//       item.petal_width
//     ]),
//     [130, 4]
// );
  
// const testData = tf.tensor2d(
//     testSet.map(item => [
//         item.sepal_length,
//         item.sepal_width,
//         item.petal_length,
//         item.petal_width
//     ]),
//     [14, 4]
// );




// PREVIOUS VERSION HERE
// // Number of classes to classify
// const NUM_CLASSES = 2;
// // Labels for our classes
// const classes = ["Left", "Right"];
// // Webcam Image size. Must be 227.
// const IMAGE_SIZE = 227;
// // K value for KNN
// const TOPK = 10;

// var knn;
// var mobilenetModule;

// async function load(){
//     knn = knnClassifier.create();
//     mobilenetModule = await mobilenet.load();
//     console.log("model loaded");
// }

// async function train(image){

//     let logits;
//     // 'conv_preds' is the logits activation of MobileNet.
//     const infer = () => this.mobilenetModule.infer(image, "conv_preds");
//     logits = infer();

//     knn.addExample(logits, "label");

//     if(logits != null){
//         logits.dispose();
//     }

// }
