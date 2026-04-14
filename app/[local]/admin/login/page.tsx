import { redirect } from 'next/navigation';

export default async function LegacyAdminLoginPage({
  params,
}: {
  params: Promise<{ local: string }>;
}) {
  const { local } = await params;

  redirect(`/${local}/admin-login`);
}
