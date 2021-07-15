export default function Footer({ ...pageProps }) {
  return (
		<footer className="bg-purple-500">
			<ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
				<li>
					Created by{" "}
					<a
						href="https://baycore.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="font-bold"
					>
						Bayu Kurniawan
					</a>
				</li>
				<li>
					<a
						href="https://github.com/bayukurniawan30/next-tailwind"
						target="_blank"
						rel="noopener noreferrer"
						className="font-bold"
					>GitHub
					</a>
				</li>
			</ul>
		</footer>
  );
}
