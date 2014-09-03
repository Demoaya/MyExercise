brite.registerView("MainView", {emptyParent:true}, {
	create: function(data,config){
       return render("tmpl-MainView");
   },
   postDisplay: function(){
	    var mainView = this;
	    
	    app.RemoteDAOHandler.listAllGroups().done(function(groupList) {
    		brite.display("ListView", mainView.$el.find(".MainView-list"));
    	});
	    
	    app.RemoteDAOHandler.listContacts().done(function(contactList) {
    		brite.display("TaskView", mainView.$el.find(".MainView-taskContent"));
    	});

   }
 });
