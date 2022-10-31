<!DOCTYPE html>
<head>
    
    <title>STUDENT ENROLLMENT FORM</title>
    <link type="text/css" rel="stylesheet" href="style.css"
</head>

<body>
    <h1>STUDENT ENROLLMENT FORM</h1>
    <table>
        <tr>
            <td>
                <form autocomplete="off" onsubmit="onFormSubmit()">
                    <div>
                        <label for="Name">Name:</label>
                        <input type="text" name="Name" id="Name">
                    </div>
                    <div>
                        <label for="Email">Email:</label>
                        <input type="text" name="Email" id="Email">
                    </div>
                    <div>
                        <label for="Address">Address:</label>
                        <input type="text" name="Address" id="Address">
                    </div>
                    <div>
                        <label for="Phone">Phone:</label>
                        <input type="number" name="Phone" id="Phone">
                    </div>
                    <div>
                    <label>   
                        Gender:  
                        </label>
                        <input type="text" name="Gender" id="Gender">   
                        
                    </div>
                    
                    <div>
                        <label>Skills:</label> 
                        
                        
                        <input type="text" name="Skills" id="Skills">
                        
                    </div>

                    <div class="form_action--button">
                        <input type="submit" value="Submit">
                        <input type="reset" value="Reset">
                    </div>
                </form>

                <td>
                    <table class="list" id="storeList">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Skills</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </td>
            </td>
        </tr>
    </table>
    <script type="text/javascript" src="./script.js"></script>
</body>
</html>
