async function getJson(url) {
  return await fetch(url).then(response => response.json()).then(json => json);
}

const bubble = ["NA"]

for(let i = 1; i<16; i++){
  bubble.push(document.getElementById(`container-${i}`))
}

function main(collection, color) {
  getJson(collection).then(data => {

    for (let i = 0; i < 15; i++) {
      let div = document.createElement('div')
      div.id = `data-container${i+1}`

      let listContainer = document.createElement('ul')
      listContainer.setAttribute("class", "list-container")
//Storing Data
      let newArr = Object.values(data)
//Printing Titles
      let h3 = document.createElement('h3')
      let titles = newArr[i].title
      h3.innerHTML = titles
      div.appendChild(h3)
//Printing Questions
      let questions = newArr[i].questions
      questions.map((props) => {
        let li = document.createElement('li')
        li.innerHTML = props
        listContainer.appendChild(li)
        div.appendChild(listContainer)
        document.body.appendChild(div)
      })
    }
    

    let info = Object.values(data.corners)
    let largeTitle = info[1]
    let logo = info[0]
    let bottomLeftText = info[2]
    let link = info[3]
    let date = info[4]
    let licenseLogo = info[5][0]
    let licenseText = info[5][1]

    let topRight = document.getElementById("top-right")
    let topRightDate = document.getElementById("top-right-date")
    let topLeft = document.getElementById("top-left")
    let bottomLeft = document.getElementById("bottom-left")
    let bottomRightLogo = document.getElementById("license-logo")
    let bottomRightLink = document.getElementById("bottom-right-link")
    let bottomRightText = document.getElementById("bottom-right-license")
    
  
    topRight.append(largeTitle)
    topRightDate.append(date)
    topLeft.src = "assets/" + color + "/" + logo
    bottomLeft.append(bottomLeftText)
    bottomRightLogo.src = "assets/" + color + "/" + licenseLogo
    bottomRightLink.append(link)
    bottomRightText.append(licenseText)
  
    let dataContainer = ["NA"]

    for(let i = 1; i<16; i++){
      dataContainer.push(document.getElementById(`data-container${i}`))
    }
   

//CHANGE CODE HERE
    // bubble[BUBBLE POSITION].appendChild(dataContainer[CONTAINER POSITION IN YOUR CANVAS JSON])
   
    // bubble[1].appendChild(dataContainer[13])

    bubble[1].appendChild(dataContainer[1])
    bubble[2].appendChild(dataContainer[5])
    bubble[3].appendChild(dataContainer[2])
    bubble[4].appendChild(dataContainer[4])
    bubble[5].appendChild(dataContainer[13])
    bubble[6].appendChild(dataContainer[6])
    bubble[7].appendChild(dataContainer[8])
    bubble[8].appendChild(dataContainer[9])
    bubble[9].appendChild(dataContainer[10])
    bubble[10].appendChild(dataContainer[14])
    bubble[11].appendChild(dataContainer[11])
    bubble[12].appendChild(dataContainer[7])
    bubble[13].appendChild(dataContainer[12])
    bubble[14].appendChild(dataContainer[3])
    bubble[15].appendChild(dataContainer[15])


    // for(let i = 1; i<16; i++){
    //   bubble[i].appendChild(dataContainer[i])
    // }
   
 
    return data;
  });
}



var url = new URL(window.location.href);

var color = url.searchParams.get("color") || "colour";

if (color == "greyscale") {
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('assets/greyscale/template-blank.jpg')";
  document.getElementsByTagName("body")[0].style.color = "black";
  var h2Elements = document.getElementsByTagName("h2");
  for(var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.color = "black";
  }
}






var lang = url.searchParams.get("lang") || "en";

lang == "nl" ? document.getElementById('container-8').style.fontSize = "10px !important" : "10px !important"
document.getElementById('container-8').style.setProperty( 'property', 'newValue', 'important' );
console.log(lang)
main("./lang/" + lang + ".json", color);

