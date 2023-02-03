document.addEventListener("DOMContentLoaded", function() {
  setTimeout(async () => {
    await Swal.fire("Your device has been hacked! (huh)");
    await Swal.fire("No for real...");
    await Swal.fire("So now that I'm in charge")
    await Swal.fire("Let's check your chrome search history!")
    await Swal.fire("Kidding... I'm gonna save the file for later")
    await Swal.fire("So baby I have a question...")
    await Swal.fire("And an important one")
    await Swal.fire("A true one")

    const answer1 = await Swal.fire({
      title: "Which one do you love the most ? Cat or me ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "You",
      cancelButtonText: "Cat",
    })
    
    if (answer1.value) {
      await Swal.fire('I knew it! Of course how could you love someone else more than me.')
    } else {
      await Swal.fire('Ho no... You just killed cat, this answer was linked to a device attached to his neck. So let\'s continue now.')
    }

    await Swal.fire("Now I have a second question");
    const answer2 = await Swal.fire({
      title: "Would you be my Valentine ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    })
    
    if (answer2.value) {
      await Swal.fire('Great I\'m gonna cook... you for the night! :D')
    } else {
      await Swal.fire('We didn\'t well receive your answer, let\'s try again.')
      const answer3 = await Swal.fire({
        title: "Would you be my Valentine ?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      })

      if (answer3.value) {
        await Swal.fire('Huh we knew it was a misclick, great but you pay for diner then.')
      } else {
        await Swal.fire('FYI you are in a while loop now, good luck')

        let answer4 = await Swal.fire({
          title: "Would you be my Valentine ?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
        })

        while (!answer4.value) {
          answer4 = await Swal.fire({
            title: "Would you be my Valentine ?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
          })
        }

        await Swal.fire('Huh we knew it was a misclick, great but you pay for diner then.')
      }
    }

  }, 8000);
    
});