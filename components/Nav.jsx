"use client";
// client side component
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth";
export default function Nav() {
  // user logged in or not state variable
  const isUserLoggedIn = true;
  // toggle menu
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    // set providers
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Notes</p>
      </Link>
      {/* mobile navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={30}
                height={30}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {
              // access all the providers
              providers &&
                Object.values(
                  providers.map((provider) => (
                    <button
                      key={provider.id}
                      type="button"
                      className="black_btn"
                      onClick={() => signIn(provider.id)}
                    >
                      Sign In
                    </button>
                  ))
                )
            }
          </>
        )}
      </div>
      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={30}
              height={30}
              className="rounded-full"
              alt="profile"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            />
            {
              // dropdown menu
              toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Prompt
                  </Link>
                  <button
                    type="button"
                    className="black_btn"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              )
            }
          </div>
        ) : (
          <>
            {
              // access all the providers
              providers &&
                Object.values(
                  providers.map((provider) => (
                    <button
                      key={provider.id}
                      type="button"
                      className="black_btn"
                      onClick={() => signIn(provider.id)}
                    >
                      Sign In
                    </button>
                  ))
                )
            }
          </>
        )}
      </div>
    </nav>
  );
}
