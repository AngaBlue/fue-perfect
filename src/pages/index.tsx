import { Box, Button, Flex, Heading, Select, Spacer, Text } from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import { type ChangeEventHandler, useState } from 'react';
import messages from '../data/messages';
import { defaultProvider } from '../data/provider';
import { useI18nContext } from '../i18n/i18n-react';
import type { Locales } from '../i18n/i18n-types';
import { locales } from '../i18n/i18n-util';
import { loadLocaleAsync } from '../i18n/i18n-util.async';
import authorize from '../util/authorize';
import getI18nProps from '../util/getI18nProps';

interface Props {
	email: string;
}

export default function Index({ email }: Props) {
	const { locale, setLocale } = useI18nContext();
	const [template, setTemplate] = useState({ index: 0 });
	const [state, setState] = useState(defaultProvider);
	const Component = messages[template.index].component;

	const updateLocale: ChangeEventHandler<HTMLSelectElement> = async e => {
		const newLocale = e.target.value as Locales;
		await loadLocaleAsync(newLocale);
		setLocale(newLocale);
	};

	return (
		<>
			<Box p={4} pt={2}>
				<Flex alignItems={'center'} gap={4}>
					<Heading mb={4}>Fue Perfect Email App</Heading>
					<Spacer />
					<Text textAlign={'center'} height={'fit-content'}>
						{email}
					</Text>
					<Button>
						<Link href={'/api/logout'}>Logout</Link>
					</Button>
					<Select value={template.index} width='max-content' onChange={e => setTemplate({ index: Number(e.target.value) })}>
						{messages.map((m, i) => (
							<option value={i} key={m.name}>
								{m.name}
							</option>
						))}
					</Select>
					<Select value={locale} width='max-content' onChange={updateLocale}>
						{locales.map(l => (
							<option value={l} key={l}>
								{l}
							</option>
						))}
					</Select>
				</Flex>
				{<Component {...{ state, setState }} />}
			</Box>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async context => {
	const i18nProps = await getI18nProps(context);
	const email = authorize(context.req.cookies)?.email;

	// This typecast is awful but it works
	const props = { props: { email, ...(i18nProps as { props: object }).props } };

	// Check if user is logged in
	if (!authorize(context.req.cookies)) {
		return {
			...props,
			redirect: {
				destination: '/login',
				permanent: false
			}
		};
	}

	return props;
};
