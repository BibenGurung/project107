
function startClassification()
{
    navigator.mediaDevices.gerUserMedia({audio: true});
    classifier = ml5.soundClassifier('', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}