'use strict';

angular.module('confusionApp')

        .constant("baseURL","http://localhost:3000/")
          .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL)  {
    
                this.getDishes = function() {
                    
                                        return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                                    };
                 
                
              this.getPromotion = function(){
                  
                  return $resource(baseURL+"promotions/:id");
              };
    
                        
        }])

        .factory('corporateFactory',['$resource','baseURL', function($resource,baseURL) {
          var cor={};
         cor.getLeaders=function(){
           return $resource(baseURL+"leadership/:id");
    
          };
            return cor;
        }])
 .factory('feedbackFactory',[ '$resource','baseURL',function($resource,baseURL){
            var feed={};
     feed.getFeedback=function(){
            return $resource(baseURL+"feedback",{'save':{method:'POST'}});
     };
       
       return feed;
       }])
       

;
