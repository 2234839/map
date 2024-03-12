import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={`border-solid border-2 border-indigo-600 ${url == '/' && 'bg-amber-950'}`} >
					Home
				</a>
				<a href="/404" class={url == '/404' && 'active'}>
					404
				</a>
				<a href="/map" class={url == '/map' && 'active'}>
					map
				</a>
			</nav>
		</header>
	);
}
