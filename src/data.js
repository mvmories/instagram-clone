import { v4 as uuid } from "uuid";

export const defaultUser = {
  id: uuid(),
  username: "username",
  name: "name",
  profile_image:
    "https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg",
  // profile_image:
  // "https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg"
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: "username",
    name: "name",
    profile_image:
      "https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg",
    // profile_image:
    //   "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_ohc=fgfdnJALms8AX_lRJ4U&edm=AJ9x6zYBAAAA&ccb=7-4&oh=0a93cd78a335d095248cf0ca4a175b0c&oe=60C0024F&_nc_sid=cff2a4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4",
  };
}

export const defaultPost = {
  id: uuid(),
  likes: 10,
  caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
  user: { defaultUser },
  media:
    "https://images.unsplash.com/photo-1551970758-e5611e613199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
  comments: [],
  created_at: "2020-02-28T03:08:14.522421+00:00",
};

export function getDefaultPost() {
  return {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
    user: defaultUser,
    media:
      "https://images.unsplash.com/photo-1551970758-e5611e613199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80",
    comments: [],
    created_at: "2020-02-28T03:08:14.522421+00:00",
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: "follow",
    user: defaultUser,
    created_at: "2020-02-29T03:08:14.522421+00:00",
  },
  {
    id: uuid(),
    type: "like",
    user: defaultUser,
    post: defaultPost,
    created_at: "2020-02-29T03:08:14.522421+00:00",
  },
];

export const defaultCurrentUser = {
  id: uuid(),
  username: "mvmories",
  name: "Miguel Vilhena",
  profile_image:
    "https://cdn.dribbble.com/users/348324/screenshots/4241552/shopier-dribbble-1.png?compress=1&resize=800x600",
  website: "https://miguelvilhena.com",
  email: "mvmories@gmail.com",
  bio: "This is my bio. Like this project? Check out my portfolio below",
  phone_number: "555-555-5555",
  posts: Array.from({ length: 10 }, () => getDefaultPost()),
  followers: [defaultUser],
  following: [defaultUser],
};
