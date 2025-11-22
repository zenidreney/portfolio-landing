 import { latestData, featuredData, olderData } from "./data.js";

        
        const allProjectsArray = [...latestData, ...featuredData, ...olderData]


        const allTagsArray = allProjectsArray
                                    .map(project => project.tags)
                                    .flat()
                                    
        const reducedTags = [...new Set(allTagsArray)]



        console.log(reducedTags)

        const rootDiv = document.getElementById("root")

        console.log(rootDiv)

        const selectBox = document.createElement("select")

        reducedTags.forEach(tag => {
            const option = document.createElement("option")
            option.value = tag
            option.textContent = tag

            selectBox.append(option)
        })

        rootDiv.append(selectBox)