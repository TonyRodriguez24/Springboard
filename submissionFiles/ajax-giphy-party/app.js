
console.log("Let's get this party started!");

$(document).ready(function () {




    async function getGif() {
        try {
            const searchTerm = $("#input").val();
            console.log(`Searching for: ${searchTerm}`);
            const result = await axios.get("https://api.giphy.com/v1/gifs/search",
                {
                    params: {
                        api_key: "OIpvoOVDEtV4uF7UTDP0Uk3gvObCIFSI",
                        q: searchTerm,
                        limit: 1,
                        offset: Math.floor(Math.random() * 100)
                    }
                });

            console.log(result)

            const gifsArray = result.data.data;

            if (gifsArray.length > 0) {
                //for each gif in the gif array set the url to the url in the data 

                for (let i = 0; i < gifsArray.length; i++) {
                    const gifURL = gifsArray[0].images.fixed_height.url;
                    $(".image-container").append(`<img src = '${gifURL}' class = 'gifs'/>`)
                }

            }


            else {
                console.log("no gifs were found")
            }

        }

        catch (error) {
            console.error("Error getting the gif", error)
        }
    }

    $("#form").on("submit", function (e) {
        e.preventDefault();
        getGif();
    });

    $("#form").on("click", "#remove-btn", function () {
        $(".image-container").children(".gifs").last().remove();
    })


});


