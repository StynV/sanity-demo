import { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';
import { i18n } from '../../i18n.config';

export async function GET(request: NextRequest) {
    const userPreferredLanguage =
        request.headers.get('accept-language')?.split(',')?.[0] ??
        i18n.defaultLocale;

    const lang = i18n.languages.some(lang => lang.id === userPreferredLanguage)
        ? userPreferredLanguage
        : i18n.defaultLocale;

    return redirect(`/${lang}${request.nextUrl.pathname.toLowerCase()}`);
}