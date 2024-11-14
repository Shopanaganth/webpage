document.getElementById('degree-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const district = document.getElementById('district').value;
    const subject1 = document.getElementById('subject1').value;
    const subject2 = document.getElementById('subject2').value;
    const subject3 = document.getElementById('subject3').value;
    const zscore = parseFloat(document.getElementById('zscore').value);

    if (subject1 === subject2 || subject2 === subject3 || subject1 === subject3) {
        alert('Please select different subjects.');
        return;
    }

    const selectedSubjects = [subject1, subject2, subject3];

    const degrees = [
      
        //--------------
      
      
        { 
            name: "ARTS*", 
            university: "University of Colombo ", 
            districtRequirements: { 'Colombo': 1.7180, 'Gampaha': 1.7180, 'Kalutara':1.7180, 'Matale':1.7180, 'Kandy': 1.7180, 'Nuwara Eliya':1.7180, 'Galle':1.7180, 'Matara': 1.7180, 'Hambantota': 1.7180, 'Jaffna': 1.7180, 'Kilinochchi':1.7180, 'Mannar':1.7180, 'Mullaitivu':1.7180, 'Vavuniya':1.7180, 'Trincomalee':1.7180, 'Batticaloa': 1.7180, 'Ampara': 1.7180, 'Puttalam':1.7180, 'Kurunegala': 1.7180, 'Anuradhapura': 1.7180, 'Polonnaruwa':1.7180, 'Badulla':1.7180,'Monaragala':1.7180, 'Kegalle': 1.7180, 'Ratnapura': 1.7180},       
            requiredSubjects: ["Economics", "Geography", "History", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology","Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization","Art", "Dancing", "Music", "Drama & Theatre", "Sinhala", "Baratha", "Oriental", "Carnatic", "Western", "Drama & Theatre Sinhala", "Drama & Theatre Tamil", "Drama & Theatre English","Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"] 
        },
       
       
      








        

     
      
        
//-----------------------  
      

        // Add more degrees, university names, and their requirements
    ];
    let suitableDegrees = [];

 for (let i = 0; i < degrees.length; i++) {
    const degree = degrees[i];
    const districtZScore = degree.districtRequirements[district];

    //check if all selected subjects are in the required subjects and additional required subjects
    let hasRequiredSubjects = selectedSubjects.every(subject => degree.requiredSubjects.includes(subject));

    
  
    if (degree.name === "ARTS(SP)* ") {
        // Define baskets
        const basket1 = ["Economics", "Geography", "History", "Home Economics", "Agricultural Science", "Mathematics", "Combined Mathematics", "Communication & Media Studies", "Information & Communication Technology", "Accounting", "Business Statistics", "Political Science", "Logic & Scientific Method", "Civil Technology", "Electrical, Electronic and Information Technology", "Agro Technology", "Mechanical Technology", "Food Technology", "Bio-Resource Technology"];
        const basket2 = ["Buddhism", "Hinduism", "Christianity", "Islam", "Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization", "Greek & Roman Civilization"];
        const basket3 = ["Art", "Dancing", "Music", "Drama & Theatre", "Sinhala", "Baratha", "Oriental", "Carnatic", "Western", "Drama & Theatre Sinhala", "Drama & Theatre Tamil", "Drama & Theatre English"];
        const basket4 = ["Sinhala", "Tamil", "English", "Arabic", "Pali", "Sanskrit", "Chinese", "French", "German", "Hindi", "Japanese", "Malay", "Russian", "Korean"];
    
        // Initialize basket counters and lists
        let basket1Count = 0;
        let basket2Count = 0;
        let basket3Count = 0;
        let basket4Count = 0;
    
        let selectedBasket2Religions = [];
        let selectedBasket2Civilizations = [];
    
        // Count subjects in each basket
        for (let i = 0; i < selectedSubjects.length; i++) {
            const subject = selectedSubjects[i];
            if (basket1.includes(subject)) {
                basket1Count++;
            } else if (basket2.includes(subject)) {
                basket2Count++;
                if (["Buddhism", "Hinduism", "Christianity", "Islam"].includes(subject)) {
                    selectedBasket2Religions.push(subject);
                } else if (["Buddhist Civilization", "Hindu Civilization", "Christian Civilization", "Islamic Civilization"].includes(subject)) {
                    selectedBasket2Civilizations.push(subject);
                }
            } else if (basket3.includes(subject)) {
                basket3Count++;
            } else if (basket4.includes(subject)) {
                basket4Count++;
            }
        }
    
        // Validate basket rules for the ARTS* degree
        const validBasket1 = basket1Count > 0;
        const validBasket2 = basket2Count <= 2 && !selectedBasket2Religions.some(religion => selectedBasket2Civilizations.includes(religion + " Civilization"));
        const validBasket3 = basket3Count <= 2 && !(selectedSubjects.filter(subject => subject.startsWith("Drama & Theatre")).length > 1);
        const validBasket4 = basket4Count <= 2;
    
        
        if (validBasket1 && validBasket2 && validBasket3 && validBasket4  && (districtZScore <= zscore)) {
            suitableDegrees.push(degree);
        }
    
    }  
    else if(hasRequiredSubjects && districtZScore <= zscore) {
        // For other degrees, check only the district Z score and required subjects
        hasRequiredSubjects=hasRequiredSubjects && (districtZScore <= zscore);
    
    }

    // Evaluate if the degree meets the required subjects and district Z score criteria
 if (hasRequiredSubjects && districtZScore <= zscore) {
    suitableDegrees.push(degree);
}
  
}



console.log(suitableDegrees)
    let resultHTML = '<h7>This system allows you to find a degree to your results according to the last year cutoff marks in your district. All details are based on UGC handbook.</h7><h2>Suitable Degrees:</h2><br>';
  
    if (suitableDegrees.length > 0) {
        suitableDegrees.forEach(degree => {
            resultHTML += `
                <div>

                    <h3>🎓${degree.name} at ${degree.university}</h3>
                    <p>🔹Required Z-score for ${district}: ${degree.districtRequirements[district]} </p>
                    <p>🔹Required Subjects: ${degree.requiredSubjects.join(', ')}   </p>   
                   
                   
                              
                    <br>
                </div>
   
            `;
        });
    } else {
        resultHTML += '<p>No suitable degrees found based on your Z-score and subjects.<br> Dear Student, Dont lose heart.There are many ways in which you can purse your degree.We have the means for that.</p>';

    }

    document.getElementById('result').innerHTML = resultHTML;
});