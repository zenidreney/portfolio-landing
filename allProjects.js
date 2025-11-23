 import { latestData, featuredData, olderData } from "./data.js";

        
        const allProjectsArray = [...latestData, ...featuredData, ...olderData]
        const allTagsArray = allProjectsArray
                                    .map(project => project.tags)
                                    .flat()                          
        const reducedTags = [...new Set(allTagsArray)]

        const rootDiv = document.getElementById("root")

        const selectBox = document.createElement("select")

        reducedTags.forEach(tag => {
            const option = document.createElement("option")
            option.value = tag
            option.textContent = tag

            selectBox.append(option)
        })
        const selectedValuePara = document.createElement("p")

        rootDiv.append(selectBox, selectedValuePara)

        selectBox.addEventListener("change", () => {

            console.log(selectBox.value)

            selectedValuePara.textContent = selectBox.value



        })

