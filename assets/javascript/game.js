var randomNumber = Math.floor(Math.random()*100)
        var total = 0
        var wins = 0
        var losses = 0
        
        
        var startGame = function () {
        // I cannot figure out what to put in this function to restart the game
            
        }
            
            $("#pickedNum").text("Click the food below to add up to : " + randomNumber)
            
            for (i=0; i < 4; i++){
                var myImage = $("<img>")
                myImage.attr("src","./assets/images/burger.png")
                myImage.attr("class", "burgerSize myFood")
                myImage.attr("data-foodValue", Math.floor(Math.random()*15))
                $("#food").append(myImage)
            }
        
        $("#wins").append("Wins: " + wins)
        $("#losses").append("Losses: " + losses)
        

        $(".myFood").on("click", function(){
            var foodNumber = parseInt($(this).attr("data-foodValue"))
            total += foodNumber
            $("#guessedNum").text(total)

            if(total===randomNumber){
                wins++
                $("#wins").html("Wins: " + wins)
                var linda = $("<img>")
                linda.attr("src","./assets/images/linda.gif")
                linda.attr("id","gifSize")
                $("#gif").append(linda)
                $("#message").append("<h1> You Win! </h1><p>Refresh page to play again!</p>")
                startGame()

            }

            else if(total > randomNumber){
                losses++
                $("#losses").html("Losses: " + losses)
                var bob = $("<img>")
                bob.attr("src","./assets/images/bob-laugh.gif")
                bob.attr("id", "gifSize")
                $("#gif").append(bob)
                $("#message").append("<h1> You Lose! </h1><p>Refresh page to play again!</p>")
                startGame()
                
    
            }
            else {
                return
            }
        })