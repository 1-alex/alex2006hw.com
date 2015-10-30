/* global ReactMeteorData */
import React from 'react';
import Slider from 'react-slick';
import BlazeTemplate from './BlazeTemplate';
import {Users, Posts} from 'app/collections';
import './App.css';

Meteor.call('sayHello', function(err, res) {
  console.log(res);
});

let App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      users: Users.find().fetch()
    };
  },

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    lazyLoad: true
    };

    let userCount = Users.find().fetch().length;
    let postsCount = Posts.find().fetch().length;
    return (
      <div className="App">
        <BlazeTemplate template={Template.loginButtons} />

        <h1>Hello Webpack!</h1>
        <p>There are {userCount} users in the Minimongo  (login to change)</p>
        <p>There are {postsCount} posts in the Minimongo  (autopublish removed)</p>

        <Slider {...settings}>
        <div>
            <img src="http://images2.fanpop.com/image/photos/9700000/Adorable-lil-Kittens-cute-kittens-9781745-1024-768.jpg"/>
            1
        </div>
        <div>
            <img src="http://blogs.studentlife.utoronto.ca/lifeatuoft/files/2014/06/kitten.jpg"/>
            2
        </div>
        <div>
            <img src="https://s-media-cache-ak0.pinimg.com/736x/2e/51/4d/2e514d03b0414f8b7c5adefa5cbccba4.jpg"/>
            3
        </div>
        <div>
            <img src="http://tonsofcats.com/wp-content/uploads/2013/09/my-eul-baby-cat-3-cute-kittens-27931326-500-653.jpg"/>
            4
        </div>
        <div>
            <img src="http://www.welikeviral.com/files/2014/12/8325_8_site.jpeg"/>
            5
        </div>
        <div>
            <video>
                <source src="/images/kittens.mp4"/>
            </video>
            6
        </div>
      </Slider>

      </div>
    );
  }
});

export default App;
