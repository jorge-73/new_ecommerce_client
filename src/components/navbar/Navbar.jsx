"use client";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import useUsers from "@/store/UserStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// import { FaShoppingCart } from "react-icons/fa";
import CartModal from "../cartModal/CartModal";

const Navbar = () => {
  const { user, isAuthenticated, loading, logout } = useAuth();
  const { imageUrl } = useUsers();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast("Good Bye!", {
      icon: "👏",
    });
    router.push("/login");
  };

  return (
    <nav>
      <div className="navbar bg-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {isAuthenticated && (
                <li>
                  <Link href={"/products"} className="font-bold text-xl">
                    Products
                  </Link>
                </li>
              )}{" "}
              {!isAuthenticated && !loading && (
                <>
                  <li>
                    <Link href={"/login"}>Login</Link>
                  </li>
                  <li>
                    <Link href={"/register"}>Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            Ecommerce
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {isAuthenticated && (
              <li>
                <Link
                  href={"/products"}
                  className="font-bold text-lg
                "
                >
                  Products
                </Link>
              </li>
            )}
            {user && user?.role === "admin" && (
              <li>
                <Link
                  href={"/admin"}
                  className="font-bold text-lg
                "
                >
                  Admin
                </Link>
              </li>
            )}
            {!isAuthenticated && !loading && (
              <>
                <li>
                  <Link href={"/login"}>Login</Link>
                </li>
                <li>
                  <Link href={"/register"}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {/* Carrito Icon */}
          {isAuthenticated && (
            <div
              className="btn btn-ghost btn-circle avatar relative"
              style={{ fontSize: "1.5rem" }}
            >
              <CartModal />
            </div>
          )}
          <div className="dropdown dropdown-end text-end pe-3 flex items-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.profilePicture
                      ? `${imageUrl}/profiles/${user?.profilePicture}`
                      : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            {isAuthenticated && (
              <ul
                tabIndex={0}
                className="mt-44 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <span>User: {user.full_name}</span>
                </li>
                <li>
                  <Link href={"/profile"} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
