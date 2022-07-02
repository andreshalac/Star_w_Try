const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			favList:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			listCharacters: () => {
				
				fetch("https://swapi.dev/api/people")
				.then((res) => res.json())
				.then(data => setStore({characters: data.results}))
			},
			
			setFavorites: (item) =>{

				const store = getStore();

				setStore({ favList: [...store.favList, item] });

			},
			deleteFavorites: (index) =>{

				const store = getStore();

				setStore({ favList: store.favList.filter((favList, i) => i !== index)})

			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
