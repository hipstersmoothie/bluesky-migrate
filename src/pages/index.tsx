import Image from "next/image";
import localFont from "next/font/local";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";
import GithubLogo from "../components/GithubLogo";
import BlueSkyLogo from "../components/BlueSkyLogo";
import { DownloadIcon } from "@radix-ui/react-icons";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

function Link({
  variant,
  ...props
}: React.ComponentProps<"a"> & {
  variant?: "destructive";
}) {
  return (
    <a
      className={`${
        variant === "destructive" ? "text-red-dim" : "text-blue-dim"
      } underline underline-offset-4`}
      {...props}
    />
  );
}

function BannerPreview({ src, alt }: { src: string; alt: string }) {
  return (
    <a
      href={src}
      className="rounded-lg overflow-hidden border-2 border-mauve-normal relative group"
      download
    >
      <Image src={src} alt={alt} width={1090 / 5} height={567 / 5} />

      <div className="absolute inset-0 flex items-center justify-center bg-mauve-action opacity-0 group-hover:opacity-80 transition-opacity">
        <DownloadIcon height={24} width={24} />
      </div>
    </a>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bluesky Migrate" />
        <meta
          name="twitter:description"
          content="This page serves a simple guide on how to migrate to Bluesky from X. All steps are optional, but you should really do the first two."
        />
        <meta
          name="twitter:image"
          content="https://www.bluesky-migrate.com/banner-dark.png"
        />
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col gap-16 font-[family-name:var(--font-geist-sans)] min-h-screen bg-mauve-app text-mauve-normal`}
      >
        <main className="px-8 md:pt-8 flex flex-col row-start-2 items-center sm:items-start flex-1">
          <div className="flex gap-5 py-10 mx-auto">
            <BlueSkyLogo />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
              Bluesky Migration
            </h1>
          </div>
          <div className="flex flex-col max-w-[60ch] mx-auto">
            <p className="text-center">
              This page serves a simple guide on how to migrate to{" "}
              <Link href="https://bsky.app">Bluesky</Link> from X. All steps are
              optional, but you should really do the first two.
            </p>

            <ol className="list-decimal list-outside flex flex-col gap-4 my-8 mx-4">
              <li>
                <Link
                  href="https://chromewebstore.google.com/detail/sky-follower-bridge/behhbpbpmailcnfbjagknjngnfdojpko?hl=en"
                  target="_blank"
                  rel="noopener"
                >
                  Import X Followers
                </Link>{" "}
                - To start you can check if anyone you follow on X is on Bluesky
              </li>
              <li>
                <Link
                  href="https://blueskydirectory.com/starter-packs/all"
                  target="_blank"
                  rel="noopener"
                >
                  Starter packs
                </Link>{" "}
                - Lists of users that help you mass follow members of a
                community.
              </li>
              <li>
                <span className="underline underline-offset-4">
                  X Display Name
                </span>{" "}
                - Change your display name on X (not your handle) to:
                <div className="bg-mauve-3 dark:bg-mauvedark-3 p-4 rounded-lg border border-mauve-7 dark:border-mauvedark-7 mt-6 text-center">
                  Your Name 🦋 @your.bluesky.handle
                </div>
              </li>
              <li>
                <Link
                  href="https://x.com/compose/post?text=🦋g"
                  target="_blank"
                  rel="noopener"
                >
                  Say goodbye to X
                </Link>{" "}
                - Post a goodbye with a 🦋
              </li>
              <li>
                <span className="underline underline-offset-4">X Banner</span> -
                Change you banner to one of the following images:
                <div className="flex flex-col md:flex-row gap-4 mx-auto w-full justify-center items-center mt-6">
                  <BannerPreview src="/banner.webp" alt="Bluesky Banner" />
                  <BannerPreview
                    src="/banner-dark.webp"
                    alt="Dark Bluesky Banner"
                  />
                </div>
              </li>
              <li>
                <Link
                  href="https://blueark.app/en-us/"
                  target="_blank"
                  rel="noopener"
                >
                  Import Tweets
                </Link>{" "}
                - Bring all your tweet along with you. Developers can use{" "}
                <Link
                  href="https://github.com/marcomaroni-github/twitter-to-bluesky"
                  target="_blank"
                  rel="noopener"
                >
                  this
                </Link>
                .
              </li>
              <li>
                <Link
                  href="https://tweetdelete.net/"
                  target="_blank"
                  rel="noopener"
                  variant="destructive"
                >
                  Delete Tweets
                </Link>{" "}
                - (Very optional) A paid service, but you can use{" "}
                <Link
                  href="https://github.com/lucahammer/tweetXer"
                  target="_blank"
                  rel="noopener"
                >
                  this project
                </Link>{" "}
                if you&apos;re technical. This will mess up any embedded tweets
                throughout the internet.
              </li>
              <li>
                <span className="underline underline-offset-4">
                  Update social links
                </span>{" "}
                - Replace X with Bluesky. Make this change across LinkedIn,
                GitHub, Medium, personal website, and other platforms.
                <div className="flex gap-4 mt-6">
                  <a
                    href="/bluesky-logo.svg"
                    className="rounded-lg overflow-hidden border-2 border-mauve-normal relative group p-4"
                    download
                  >
                    <Image
                      src="/bluesky-logo.svg"
                      alt="Bluesky logo"
                      width={32}
                      height={32}
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-mauve-action opacity-0 group-hover:opacity-80 transition-opacity">
                      <DownloadIcon height={24} width={24} />
                    </div>
                  </a>
                  <div className="bg-mauve-3 dark:bg-mauvedark-3 rounded-lg border border-mauve-7 dark:border-mauvedark-7 flex-1 flex justify-center items-center">
                    https://bsky.app/profile/your.bluesky.handle
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </main>

        <footer className="row-start-3 text-mauve-dim  flex flex-col gap-4 flex-wrap items-center justify-center p-8 bg-mauve-3 dark:bg-mauvedark-3">
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger>
                <a
                  href="https://bsky.app/profile/hipstersmoothie.com"
                  target="_blank"
                  rel="noopener"
                >
                  <BlueSkyLogo size="small" color="currentColor" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>View creator on BlueSky</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <a
                  href="https://github.com/hipstersmoothie/bluesky-migrate"
                  target="_blank"
                  rel="noopener"
                >
                  <GithubLogo size="small" color="currentColor" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>View source on Github</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="text-sm">Copyright © {year} Andrew Lisowski</div>
        </footer>
      </div>
    </>
  );
}
