/**
 * Created by dat on 9/23/16.
 */
FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "blogHome"});
    }
});

FlowRouter.route('/:postId', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "blogPost"});
    }
});