document.addEventListener("DOMContentLoaded", () => {
    const loadJsonButton = document.getElementById("load-json-button") as HTMLButtonElement;
    const jsonList = document.getElementById("json-list") as HTMLUListElement;
    const jsonUrl = "https://raw.githubusercontent.com/sdsdevworks/avutil/main/src/basicvidplayer/test.json"; // Replace with your JSON URL

    loadJsonButton.addEventListener("click", () => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((data) => {
                // Clear the existing list items
                jsonList.innerHTML = "";

                // Create list items from the JSON data
                data.forEach((item: { name: string }) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = item.name;
                    jsonList.appendChild(listItem);
                });
            })
            .catch((error) => {
                console.error("Error loading JSON:", error);
            });
    });
});