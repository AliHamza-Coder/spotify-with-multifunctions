        let grade = [];
        let creditHours =[]
        let gradePoints =[]
        let totalgradepoints=0
        let gpa=0
        let g_pa=[]
        let c_gpa=0
        let credit_Hours=[]
        document.querySelector(".reset").addEventListener("click",()=>
            {
                location.reload()
            })
    document.querySelector(".calculate-cgpa").addEventListener("click",()=>{
        
        document.querySelector(".header-block").innerHTML=""
        document.querySelector(".result").innerHTML=""
        document.querySelector(".header-block").innerHTML=`
        <div class="box head-box1">Semester#</div>
        <div class="box head-box2">GPA</div>
        <div class="box head-box3">Credit Hours</div>`
        let block1=document.querySelectorAll(".block1")
        for (let i = 0; i <block1.length; i++) {
            block1[i].innerHTML=""
            block1[i].innerHTML+=`
            <div class="box">#${i+1}</div>
            <div class="box">
                <input type="number" class="usr-gpa">
                </div>
                <div class="box">
                    <input type="number" class="usr-credithours">
                    </div>`
                }
                document.querySelector(".result").innerHTML=`
                <button class="calculate" id="calculate">Calculate CGPA</button>
                <div>CGPA: <li class="cgpa" id="cgpa">NONE</li>
                    </div>`
                document.querySelector(".calculate").addEventListener("click",()=>{
                    const creditelement = document.getElementsByClassName("usr-credithours");
                    const gpaelement=document.getElementsByClassName("usr-gpa");
                    for (let i = 0; i < gpaelement.length; i++) {
                        g_pa.push(Number(gpaelement[i].value))
                        credit_Hours.push(Number(creditelement[i].value))
                    }
                    // summ of each
                    let count=0;
                    for (let i = 0; i < g_pa.length; i++) {
                        g_pa[i] *= credit_Hours[i]
                    }
                    let gpa_sum=0
                    let credithours_sum=0
                    for (let i = 0; i < g_pa.length; i++) {
                        gpa_sum += g_pa[i]
                        credithours_sum += credit_Hours[i]
                    }
                    c_gpa = gpa_sum/credithours_sum
                    document.querySelector(".cgpa").innerHTML=c_gpa.toFixed(2)
                })
            })
        function maingpa(){
            document.querySelector(".calculate").addEventListener("click",()=>
                {
                    const creditelement = document.getElementsByClassName("credit-hours");
                    const gradelement=document.getElementsByClassName("grade");
                    for (let i = 0; i < gradelement.length; i++) {
                        grade.push(gradelement[i].value)
                        creditHours.push(Number(creditelement[i].value))
                    }
                    calculation()
                }
            )
        }
        function get_grade_points(i){
            if(grade[i]=="A+")
                {
                    gradePoints.push(4)
            }
            else if(grade[i]=="A")
            {
                gradePoints.push(3.66)
            }
            else if(grade[i]=="B+")
            {
                gradePoints.push(3.33)
            }
            else if(grade[i]=="B")
            {
                gradePoints.push(3.0)
            }
            else if(grade[i]=="B-")
            {
                gradePoints.push(2.66)
            }
            else if(grade[i]=="C+")
            {
                gradePoints.push(2.33)
            }
            else if(grade[i]=="C")
            {
                gradePoints.push(2.0)
            }
            else if(grade[i]=="C-")
            {
                gradePoints.push(1.66)
            }
            else if(grade[i]=="D+")
            {
                gradePoints.push(1.33)
            }
            else if(grade[i]=="D")
            {
                gradePoints.push(1)
            }
            else if(grade[i]=="F")
            {
                gradePoints.push(0)
            }
            else
            {
                gradePoints.push(0)
            }
        }
        function calculation(){
            let creditshow = document.querySelectorAll(".credit-points")
            var sum=0
            //updating grade points
            for (let i = 0; i < grade.length; i++) {
                get_grade_points(i);
                gradePoints[i] *= creditHours[i]
                creditshow[i].innerHTML= gradePoints[i]
            }
            // summ of updates
            for (let i = 0; i < grade.length; i++) {
                totalgradepoints +=gradePoints[i]
                sum += creditHours[i]
            }
            gpa=totalgradepoints/sum
            document.querySelector(".gpa").innerHTML=gpa.toFixed(2);
        }
        maingpa()
        

