var previousnews = 0;

function showPreviousNews() {
  if (previousnews == 0) {
    document.getElementById('previousnews').style='display:inline-block';
  } else {
    document.getElementById('previousnews').style='display:none';
  }
  previousnews = 1 - previousnews;
}
