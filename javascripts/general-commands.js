function printImage(imagePath)
{
    var URL = imagePath;
    var W = window.open(URL, 'Print Window','height=2500,width=2500');
    W.window.print();
}

