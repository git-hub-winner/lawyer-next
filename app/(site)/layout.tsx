type GuestLayoutProps = {
  children: React.ReactNode;
};

export default function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <>
      <main className="min-h-screen">{children}</main>
    </>
  );
}
