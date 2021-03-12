console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("change", event => {
    if (event.target.id === "materialselector") {
      const currentMaterial = event.target.value
      console.log(`User wants to see ${currentMaterial} material`)
      //invoke a filter function passing the year as an argument
      filterLegosMaterial(currentMaterial);
	}
})

const filterLegosMaterial = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(whatFilter) || whatFilter === "AllMaterials") {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

navElement.addEventListener("click", (event) => {
	
	if (event.target.id === "searchid") {
		const search = document.querySelector("input[name='postSearch']").value
		console.log("user wants to search for ", search)
		filterLegoId(search)
	} else if (event.target.id === "showAll") {

		makeLegoList(useLegos())
	}
})

navElement.addEventListener("keydown", (event) => {
	
	if (event.key === "Enter") {
		const search = document.querySelector("input[name='postSearch']").value
		console.log("user wants to search for ", search)
		filterLegoId(search)
	} else if (event.target.id === "showAll") {

		makeLegoList(useLegos())
	}
})

const filterLegoId = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Id == whatFilter) {
			console.log(singleLego)
			return singleLego;
		} 
	})
	makeLegoList(filterArray);
	if (filterArray.length === 0) { 
			document.querySelector("input[name='postSearch']").value = `Error no ID ${whatFilter}`
			makeLegoList(useLegos());
		}

}


const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();