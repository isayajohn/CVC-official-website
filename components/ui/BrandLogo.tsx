import Image from 'next/image';
import { SITE_NAME } from '@/lib/site';

interface BrandLogoProps {
  size?: number;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  size = 48,
  alt = `${SITE_NAME} logo`,
  className = '',
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo-cvc.svg"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
