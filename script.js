const exercises = [
    {
      name: "Push-Ups",
      description: "A basic exercise to strengthen your upper body.",
      image: "push-up.jpeg"
    },
    {
      name: "Squats",
      description: "A great exercise for your legs and glutes.",
      image: "squats.jpeg"
    },
    {
      name: "Plank",
      description: "An excellent exercise for core strength.",
      image: "plank.jpeg"
    },
    {
      name: "Lunges",
      description: "A powerful exercise for your lower body and balance.",
      image: "lunges.jpeg"
    },
    {
      name: "Burpees",
      description: "A full-body exercise that improves cardiovascular fitness.",
      image: "Burpees.jpeg"
    }
  ];
  
  let currentExerciseIndex = 0;
  
  document.getElementById('generate-btn').addEventListener('click', generateExercise);
  
  function generateExercise() {
    currentExerciseIndex = (currentExerciseIndex + 1) % exercises.length;
    const exercise = exercises[currentExerciseIndex];
  
    document.getElementById('exercise-name').textContent = exercise.name;
    document.getElementById('exercise-image').src = exercise.image;
    document.getElementById('exercise-image').alt = exercise.name;
    document.getElementById('exercise-description').textContent = exercise.description;
  }
  
  
  generateExercise();
  