


/*check if document has loaded fully using the ready function*/
//as in the code below
$(document) .ready(function()
{
//jquery designs and animations 
    /*$("h1").mouseenter(function()
        {
            //$(this).fadeToggle(1000).fadeIn();
            $(this).slideUp(1000) .slideDown(1000);
        });//end
    
    $("#element > h5").hide();
    $("#element > img") .mouseenter(function(){
        $("#element  h5") .show(1000);
        });//end
    $("#pris").mouseleave(function(){
        $("#element h5").hide(1000);
    });*/
    // shortcut represention of event is e 
    $('#contact-form').on('submit', function(e)
    {

        //post event handling logic here 
        url = '/';
        data = $(this).serialize();



        $.post(url, data)
          .done(function(){
         //if data was successfully submitted ;alert('you are logged in');
         alert('you are logged in');
         //if data was submitted and there was an error
     }).fail(function() {
         alert('Ooops. something went wrong');


          });
         //the alert keyword is used to know if code is running well whne testing on the browser
        //alert('hi there. I work');

    //the following code below prevents page from being reloaded when the form is submitted 
    //or prevents default behaviour of the phone .
        e.preventDefault();


    });
    //the following code validates form user input
    $('#contact-form').validate(
    {
     
    rules:
    {
     fullName: "required",
     email:{
     required: true,
     email: true

    }
    },
    messages:
    {
     fullName: "this field is required!",
     email: 
     {
     required: "this field is required!",
     email: "please use this format user@user.com"

     }

    }
   



    });
     $( "#accordion" ).accordion();
     $( "#little" ).tabs();
     $( "#tabs").tabs();

githubReposUrl = "https://api.github.com/users/josephbill/repos" 
     
$.get(githubReposUrl, function(repositories) {

        
// parse repositories array
    
   projectListTemplate = ' ';
    
    projectListTemplate += '<ul>';



    
    repositories.forEach(function(repository) {
    
    projectListTemplate += '<li>';      
projectListTemplate += '<h2><a href="'+ repository.html_url + repository.name +'"> </a></h2>';

 projectListTemplate += '<p>My project description</p>';
        
        projectListTemplate +=  '<a href="#">Teams working on project</a>';
        
        projectListTemplate += '</li>';
            });
       
     projectListTemplate += '</ul>';
        // projectListTemplate = '<ul>'
        
//      + '<li>'
        //  + '<h2><a href="#"> Introduction to bootstrap</a></h2>'
        //   + '<p>My project description</p>'                    
   
        //                          + '<a href="#">Teams working on project</a>'
        //                      +'</li>'
        //    +'</ul>';
              
    $('#open-source-content').html(projectListTemplate);
    });
 
    nodeServerUrl = 'http://127.0.0.1:8085';
    dataHandler = function(data){
    console.log(data);
 

    };
    $.get(nodeServerUrl, dataHandler)






 

});



    

