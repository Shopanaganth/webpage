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
            name: "BIOLOGICAL SCIENCE", 
            university: "South Eastern University of Sri Lanka", 
            districtRequirements: { 'Colombo':0.9968, 'Gampaha':0.5734, 'Kalutara':"NQC", 'Matale':0.7426, 'Kandy':0.9790, 'Nuwara Eliya':0.7490, 'Galle':1.1413, 'Matara':"NQC", 'Hambantota':0.7948, 'Jaffna':"NQC", 'Kilinochchi':0.6308, 'Mannar':0.2566, 'Mullaitivu':"NQC", 'Vavuniya':0.4457, 'Trincomalee':0.5396, 'Batticaloa':0.6869, 'Ampara':0.8888, 'Puttalam':0.5876, 'Kurunegala':"NQC", 'Anuradhapura':0.5119, 'Polonnaruwa':0.3551, 'Badulla':0.6449, 'Monaragala':0.4781, 'Kegalle':"NQC", 'Ratnapura':0.6316}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics","Combined Mathematics","Mathematics","Higher Mathematics","Agricultural Science"] 
        },
        { 
            name: "MEDICINE", 
            university: "South Eastern University of Sri Lanka", 
            districtRequirements: { 'Colombo':0.9968, 'Gampaha':0.5734, 'Kalutara':"NQC", 'Matale':0.7426, 'Kandy':0.9790, 'Nuwara Eliya':0.7490, 'Galle':1.1413, 'Matara':"NQC", 'Hambantota':0.7948, 'Jaffna':"NQC", 'Kilinochchi':0.6308, 'Mannar':0.2566, 'Mullaitivu':"NQC", 'Vavuniya':0.4457, 'Trincomalee':0.5396, 'Batticaloa':0.6869, 'Ampara':0.8888, 'Puttalam':0.5876, 'Kurunegala':"NQC", 'Anuradhapura':0.5119, 'Polonnaruwa':0.3551, 'Badulla':0.6449, 'Monaragala':0.4781, 'Kegalle':"NQC", 'Ratnapura':0.6316}, 
            requiredSubjects: ["Biology", "Chemistry", "Physics"] 
        },

        

//-----------------------  
        { 
            name: "ENGINEERING TECHNOLOGY (ET)", 
            university: "University of Colombo", 
            districtRequirements: { 'Colombo':1.7916, 'Gampaha':1.7798, 'Kalutara':1.7798, 'Matale':1.7553, 'Kandy':1.7588, 'Nuwara Eliya':1.8890, 'Galle':1.7665 ,'Matara':1.7598, 'Hambantota':1.7827, 'Jaffna':1.8646, 'Kilinochchi':1.8774, 'Mannar':"NQC", 'Mullaitivu':"NQC", 'Vavuniya':"NQC", 'Trincomalee':1.7613, 'Batticaloa':1.7827, 'Ampara':"NQC", 'Puttalam':1.8230, 'Kurunegala':1.7725, 'Anuradhapura':1.7830, 'Polonnaruwa':"NQC", 'Badulla':1.7891, 'Monaragala':1.8538, 'Kegalle':1.8327, 'Ratnapura':1.8044}, 
            requiredSubjects: ["Science for Technology","Engineering Technology","Accounting","Mathematics","Home Economics","English","Geography","Communication and Media Studies","Information & Communication Technology","Art","Business Studies","Agricultural Science"]
        },
      
//-----------------------        
      
        
//-----------------------  
      

        // Add more degrees, university names, and their requirements
    ];
    let suitableDegrees = [];

 for (let i = 0; i < degrees.length; i++) {
    const degree = degrees[i];
    const districtZScore = degree.districtRequirements[district];

    //check if all selected subjects are in the required subjects and additional required subjects
    let hasRequiredSubjects = selectedSubjects.every(subject => degree.requiredSubjects.includes(subject));

    if (degree.name === "ENGINEERING TECHNOLOGY (ET)") {
        const additionalRequiredSubject1 = "Engineering Technology";
        const additionalRequiredSubject2 = "Science for Technology";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& (districtZScore <= zscore);
                                                         
                             
    }
    if (degree.name === "BIOLOGICAL SCIENCE") {
        const additionalRequiredSubject1 = "Biology";
        const additionalRequiredSubject2 = "Chemistry";
   
        hasRequiredSubjects= hasRequiredSubjects && 
                              selectedSubjects.includes(additionalRequiredSubject1)&&
                              selectedSubjects.includes(additionalRequiredSubject2)&& (districtZScore <= zscore);
                                                         
                             
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