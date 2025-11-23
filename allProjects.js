import { latestData, featuredData, olderData } from "./data.js";
import { renderCarousel } from "./carousel.js";


const allProjectsArray = [...latestData, ...featuredData, ...olderData]
const allTagsArray = allProjectsArray
    .map(project => project.tags)
    .flat()
const reducedTags = [...new Set(allTagsArray)]
const rootDiv = document.getElementById("root")
const selectBox = document.createElement("select")
selectBox.id = "project-filter"

reducedTags.forEach(tag => {

    const option = document.createElement("option")
    option.value = tag
    option.textContent = tag

    selectBox.append(option)

})
const selectedValuePara = document.createElement("p")

rootDiv.append(selectBox, selectedValuePara)

selectBox.addEventListener("change", () => {
    selectedValuePara.textContent = selectBox.value
    // console.log(allProjectsArray)

    const selectedProjectsArray = allProjectsArray.filter(project => {
        // console.log(project.tags.includes(selectBox.value))
        return project.tags.includes(selectBox.value)
    
    
    })

    renderCarousel(selectedProjectsArray, "selected-carousel")

    console.log(selectedProjectsArray)
})

