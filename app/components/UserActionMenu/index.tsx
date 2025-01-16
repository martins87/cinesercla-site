"use client";

import { useState } from "react";

import User from "../../assets/images/user.png";
import Image from "next/image";

const UserActionMenu = () => {
  const [isLoggedIn] = useState<boolean>(true);

  return (
    <div>{isLoggedIn && <Image src={User} alt="user mocked image" />}</div>
  );
};

export default UserActionMenu;
