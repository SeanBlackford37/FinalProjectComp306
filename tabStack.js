import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js'
import SearchScreen from './SearchScreen.js'
import PostDetailsScreen from './PostDetailsScreen.js'
import CreatePostScreen from './CreatePostScreen.js'
import {ProfileScreen} from './ProfileScreen.js'
import {SettingsScreen} from './SettingsScreen.js'
import {IndividualReview} from './ReviewListScreen.js'

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <PostDetailsStack.Screen name="PostDetails" component={PostDetailsScreen} />
      <IndividualReviewStack.Screen name="IndividualReview" component={IndividualReview} />
     
    </HomeStack.Navigator>
  );
}
const SearchStack = createStackNavigator();
export function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <PostDetailsStack.Screen name="PostDetails" component={PostDetailsScreen} />
      <IndividualReviewStack.Screen name="IndividualReview" component={IndividualReview} />
    </SearchStack.Navigator>
  );
}
const CreatePostStack = createStackNavigator();
export function CreatePostStackScreen() {
  return (
    <CreatePostStack.Navigator>
      <CreatePostStack.Screen name="CreatePost" component={CreatePostScreen} />
      
    </CreatePostStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
export function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      </ProfileStack.Navigator>
  );
}
const PostDetailsStack = createStackNavigator();
export function PostDetailsStackScreen() {
  return (
    <PostDetailsStack.Navigator>
      <PostDetailsStack.Screen name="PostDetails" component={PostDetailsScreen} />
      </PostDetailsStack.Navigator>
  );
}
const SettingsStack = createStackNavigator();

export function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      </SettingsStack.Navigator>
  );
}

const IndividualReviewStack = createStackNavigator();

export function IndividualReviewStackScreen() {
  return (
    <IndividualReviewStack.Navigator>
      <IndividualReviewStack.Screen name="IndividualReview" component={IndividualReview} />
      </IndividualReviewStack.Navigator>
  );
}




