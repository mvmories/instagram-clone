import React from "react";
import { useProfilePictureStyles } from "../../styles";
import { Person } from "@material-ui/icons";

function ProfilePicture({
  size,
  image = "https://cdn.dribbble.com/users/348324/screenshots/4241552/shopier-dribbble-1.png?compress=1&resize=800x600",
  isOwner,
}) {
  const classes = useProfilePictureStyles({ size, isOwner });

  return (
    <section className={classes.section}>
      {image ? (
        <div className={classes.wrapper}>
          <img src={image} alt="User profile" className={classes.image} />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Person />
        </div>
      )}
    </section>
  );
}

export default ProfilePicture;
