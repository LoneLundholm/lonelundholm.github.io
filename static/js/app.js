var keramikApp = angular.module('keramik',[]).
  config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
          when('/', { templateUrl: 'static/frontpage.html', controller:'FrontpageController'  }).
              otherwise({ redirectTo: '/' });
  }]);
  
 keramikApp.filter("mySecondFilter", function(){
    return function(input, row, numColumns){
        var returnArray = [];
        for(var x = row * numColumns; x < row * numColumns + numColumns; x++){
            if(x < input.length){
                returnArray.push(input[x]);                    
            }
            else{
                returnArray.push(""); //this is used for the empty cells
            }
        }
        return returnArray;   
    }});
keramikApp.filter("myFilter", function(){
    return function(input, numColumns){
        var filtered = [];
        for(var x = 0; x < input.length; x++){
            if(x % numColumns === 0){
                filtered.push(filtered.length);
            }
        }
        return filtered;
    }});

keramikApp.controller('FrontpageController', ['$scope', function($scope) {
$scope.greeting = 'Hola!';

$scope.topitems = [	
	{image:'static/img/head1.jpg', title: 'Turkis lynlåsskål', text:'Turkis raku skål. Kun til "tørre ting"'},
	{image:'static/img/DSC_0093.JPG', title: 'Figurer', text:'Figurer. 11 cm høje'},
	{image:'static/img/item1.jpg', title: 'Sort/hvid stentøjsskål', text:'Stentøjsskål.25 cm i diameter'}
];

$scope.categories = [
  { title:'Piger på...',
    text: '',
    images: ["static/img/063.JPG", "static/img/DSC_0092.JPG",
	"static/img/067.JPG","static/img/080.JPG","static/img/item6.jpg","static/img/122.JPG","static/img/125.JPG"
	]
  },
  { title:'Lynlåsskåle',
    text: '',
    images: ["static/img/S1.JPG","static/img/S2.JPG","static/img/S3.JPG","static/img/S4.JPG","static/img/S5.JPG", "static/img/119.JPG", "static/img/096.JPG", "static/img/076.JPG","static/img/075.JPG","static/img/073.JPG",
	"static/img/DSC_0104.JPG","static/img/114.JPG","static/img/DSC_0082.JPG","static/img/DSC_0567.JPG"]
  },
  { title:'Figurer',
    text: '',
    images: ["static/img/053.JPG", "static/img/DSC_0097.JPG","static/img/DSC_0093.JPG","static/img/DSC_0086.JPG","static/img/DSC_0569.JPG","static/img/DSC_0573.JPG","static/img/DSC_0574.JPG","static/img/DSC_0575.JPG","static/img/DSC_0577.JPG","static/img/DSC_0578.JPG","static/img/DSC_0580.JPG","static/img/DSC_0581.JPG","static/img/DSC_0582.JPG","static/img/DSC_0585.JPG"]
  },
  { title:'Skåle og vaser',
    text: '',
    images: ["static/img/SK1.JPG","static/img/SK2.JPG","static/img/SK3.JPG","static/img/DSC_0103.JPG", "static/img/DSC_0080.JPG", "static/img/DSC_0077.JPG","static/img/111.JPG",
	"static/img/107.JPG",  "static/img/item3.jpg","static/img/DSC_0072.JPG","static/img/item5.jpg","static/img/DSC_0564.JPG"]
  },
  { title:'Huse',
    text: '',
    images: ["static/img/DSC_0100.JPG", "static/img/item2.jpg"]
  }
];

$scope.items = [
    {image:'static/img/053.JPG', title: 'Hiphop', text:''},
	{image:'static/img/063.JPG', title: '', text:''},
	{image:'static/img/067.JPG', title: '', text:''},
	{image:'static/img/073.JPG', title: '', text:''},
	{image:'static/img/075.JPG', title: '', text:''},
	{image:'static/img/076.JPG', title: '', text:''},
	{image:'static/img/080.JPG', title: '', text:''},
	{image:'static/img/096.JPG', title: '', text:''},
	{image:'static/img/107.JPG', title: '', text:''},
	{image:'static/img/111.JPG', title: '', text:''},
	{image:'static/img/114.JPG', title: '', text:''},
	{image:'static/img/119.JPG', title: '', text:''},
	{image:'static/img/122.JPG', title: '', text:''},
	{image:'static/img/125.JPG', title: '', text:''},
	{image:'static/img/item2.jpg', title: 'Skæve huse', text:'Skæve huse, raku. Kun til pynt. Fyrfadslys kan placeres i huset. 5 cm høje.'},
	{image:'static/img/item3.jpg', title: 'Små blå stentøjsskåle', text:'Små blå stentøjsskåle, tåler opvaskemaskine. Mellem 7 og 10 cm i diameter, mellem 7 og 10 cm høje.'},
	{image:'static/img/item5.jpg', title: 'Fugleskål', text:'Fad med næb. Rakubrændt. Kun til "tørre ting".30 cm i diameter'},
	{image:'static/img/DSC_0072.JPG', title: 'Titel', text:'Kæmpe frugtskål. Lertøj. 35 cm i diameter, 15 cm høj'},
	{image:'static/img/DSC_0077.JPG', title: 'Titel', text:'Stor gul raku-clips-skål. 21 cm i dimeter, 18 cm høj'},
	{image:'static/img/DSC_0080.JPG', title: 'Titel', text:'Plaster-vase. Stentøj. 15 cm høj'},
	{image:'static/img/DSC_0082.JPG', title: 'Titel', text:'Høj raku beholder til f.eks køkkenredskaber. 25 cm høj, 8 cm i diameterText'},
	{image:'static/img/DSC_0086.JPG', title: 'Titel', text:'Musikere'},	
	{image:'static/img/DSC_0092.JPG', title: 'Titel', text:'Små stentøjs-urtepotter'},
	{image:'static/img/DSC_0097.JPG', title: 'Titel', text:'Raku figurer, ca. 11 cm høje'},
	{image:'static/img/DSC_0100.JPG', title: 'Titel', text:'Små hytter, raku. Velegnede til fyrfadslys'},
	{image:'static/img/DSC_0103.JPG', title: 'Titel', text:'Blå blyants-beholder, stentøj.11 cm høj'},
	{image:'static/img/DSC_0104.JPG', title: 'Titel', text:'Kæmpe raku skål. 34 cm i diameter, 14 cm høj'}
];
}]);