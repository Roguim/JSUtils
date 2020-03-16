var headernumber = 0;
function MakeHeader(element) {
    if (element.classList.contains('invisible')) {
        return;
    } else {
        if (element.id == "") {
            headernumber += 1;
            element.id = `${headernumber}`;
        }
        name = element.innerHTML;
        link = document.createElement('a');
        link.innerHTML = name;
        link.href = document.URL.slice(0, -1)+`#${element.id}`;
        document.getElementsByTagName('header')[0].append(link);
    }
}
for (n = 1; n <= 6; n++) {
    for (i = 0; i < document.getElementsByTagName(`h${n}`).length; i++) {
        MakeHeader(document.getElementsByTagName(`h${n}`)[i]);
    }
}
