import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="posts">
        <a>Post</a>
      </Link>
      {/* <Link href="/posts/[id]" as={`/posts/${5}`}><a>Post #5</a></Link> */}
      <style jsx>
        {`
          nav {
            padding-top: 50px;
          }
          a {
            text-decoration: none;
            color: #585159;
            font-size: 20px;
            padding: 0 10px;
          }
          .a:hover,
          .a:focus,
          .a:active {
            a: #0070f3;
            border-color: #0070f3;
          }
        `}
      </style>
    </nav>
  );
}
