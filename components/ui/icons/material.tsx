// Re-export Material UI icons
// Only including verified icons that exist in @mui/icons-material
// Icons with duplicates in custom icons are excluded
export {
  Home,
  Delete,
  Edit,
  Add,
  Remove,
  Close,
  Notifications,
  Person,
  PersonAdd,
  LockOpen,
  LocationOn,
  StarBorder,
  Favorite,
  FavoriteBorder,
  CheckCircle,
  Cancel,
  ArrowBack,
  ArrowForward,
  ArrowRight,
  ChevronLeft,
  KeyboardArrowUp,
  KeyboardArrowDown,
  Upload,
  Share,
  Twitter,
  LinkedIn,
  WhatsApp,
  Language,
  Public,
  MenuOpen,
  CloseFullscreen,
  Dashboard,
  Analytics,
  BarChart,
  PieChart,
  TrendingUp,
  CreditCard,
  AttachMoney,
  Receipt,
  LocalOffer,
  Inventory,
  Category,
  Info,
  Help,
  HelpOutline,
  Error,
  Warning,
  CloudUpload,
  CloudDownload,
  Refresh,
  Sync,
  Build,
  SettingsApplications,
  AdminPanelSettings,
  Security,
  VerifiedUser,
  Group,
  GroupAdd,
  PersonOutline,
  AccountCircle,
  ExitToApp,
  Login,
  Logout,
  AddShoppingCart,
  RemoveShoppingCart,
  Create,
  Save,
  Done,
  DoneAll,
  ArrowUpward,
  ArrowDownward,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  FirstPage,
  LastPage,
  MoreVert,
  MoreHoriz,
  ContentCopy,
  ContentCut,
  ContentPaste,
  FileCopy,
  Folder,
  FolderOpen,
  Image,
  PhotoCamera,
  CameraAlt,
  MusicNote,
  VideoLibrary,
  InsertDriveFile,
  Description,
  PictureAsPdf,
  Print,
  Send,
  Reply,
  ReplyAll,
  Forward,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

// Custom SVG icons
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Menu(props: IconProps) {
  return <BaseIcon {...props}><path d="M4 6h16M4 12h16M4 18h16" /></BaseIcon>;
}
export function X(props: IconProps) {
  return <BaseIcon {...props}><path d="m6 6 12 12M18 6 6 18" /></BaseIcon>;
}
export function Globe(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </BaseIcon>
  );
}
export function User(props: IconProps) {
  return <BaseIcon {...props}><path d="M12 13a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0" /></BaseIcon>;
}
export function ShoppingBag(props: IconProps) {
  return <BaseIcon {...props}><path d="M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 1 1 6 0v2" /></BaseIcon>;
}
export function ShoppingCart(props: IconProps) {
  return <BaseIcon {...props}><path d="M3 5h2l2 11h10l2-8H7M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" /></BaseIcon>;
}
export function Facebook(props: IconProps) {
  return <BaseIcon {...props}><path d="M14 4h-2a3 3 0 0 0-3 3v3H7v3h2v7h3v-7h2.5l.5-3H12V7a1 1 0 0 1 1-1h1V4Z" /></BaseIcon>;
}
export function Instagram(props: IconProps) {
  return <BaseIcon {...props}><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17" cy="7" r="1" /></BaseIcon>;
}
export function Youtube(props: IconProps) {
  return <BaseIcon {...props}><rect x="3" y="6" width="18" height="12" rx="4" /><path d="m11 10 4 2-4 2z" /></BaseIcon>;
}
export function Mail(props: IconProps) {
  return <BaseIcon {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></BaseIcon>;
}
export function Phone(props: IconProps) {
  return <BaseIcon {...props}><path d="M5 4h4l1.2 3.2-2.1 1.7a14.5 14.5 0 0 0 7 7l1.7-2.1L20 15v4a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" /></BaseIcon>;
}
export function MapPin(props: IconProps) {
  return <BaseIcon {...props}><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></BaseIcon>;
}
export function Play(props: IconProps) {
  return <BaseIcon {...props}><path d="m8 6 10 6-10 6Z" /></BaseIcon>;
}
export function Pause(props: IconProps) {
  return <BaseIcon {...props}><path d="M8 6v12M16 6v12" /></BaseIcon>;
}
export function Volume2(props: IconProps) {
  return <BaseIcon {...props}><path d="M5 10h3l4-3v10l-4-3H5zM16 9a4 4 0 0 1 0 6M18 7a7 7 0 0 1 0 10" /></BaseIcon>;
}
export function Mic(props: IconProps) {
  return <BaseIcon {...props}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" /></BaseIcon>;
}
export function Building2(props: IconProps) {
  return <BaseIcon {...props}><path d="M4 21V6l8-3 8 3v15M9 21v-4h6v4M8 8h2m4 0h2M8 12h2m4 0h2" /></BaseIcon>;
}
export function CalendarCheck(props: IconProps) {
  return <BaseIcon {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M9 16l2 2 4-4" /></BaseIcon>;
}
export function Ticket(props: IconProps) {
  return <BaseIcon {...props}><path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3 2 2 0 0 0 0 4 3 3 0 0 1-3 3H6a3 3 0 0 1-3-3 2 2 0 0 0 0-4Z" /><path d="M12 8v8" /></BaseIcon>;
}
export function Check(props: IconProps) {
  return <BaseIcon {...props}><path d="m5 13 4 4 10-10" /></BaseIcon>;
}
export function History(props: IconProps) {
  return <BaseIcon {...props}><path d="M3 12a9 9 0 1 0 3-6.7M3 4v4h4M12 8v5l3 2" /></BaseIcon>;
}
export function Target(props: IconProps) {
  return <BaseIcon {...props}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1.2" /></BaseIcon>;
}
export function Eye(props: IconProps) {
  return <BaseIcon {...props}><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" /><circle cx="12" cy="12" r="2.5" /></BaseIcon>;
}
export function EyeOff(props: IconProps) {
  return <BaseIcon {...props}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 6 10 6a13.16 13.16 0 0 1-1.67 2.68M6.12 6.12A15.15 15.15 0 0 1 4.64 6c-1.61.5-3.13.94-4.47 1.35M3 3l18 18" /></BaseIcon>;
}
export function AlertCircle(props: IconProps) {
  return <BaseIcon {...props}><circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" /></BaseIcon>;
}
export function LogOut(props: IconProps) {
  return <BaseIcon {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" /></BaseIcon>;
}
export function Heart(props: IconProps) {
  return <BaseIcon {...props}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" /></BaseIcon>;
}
export function Download(props: IconProps) {
  return <BaseIcon {...props}><path d="M12 4v11M8 11l4 4 4-4M5 20h14" /></BaseIcon>;
}
export function Music(props: IconProps) {
  return <BaseIcon {...props}><path d="M9 18a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm8-2a2 2 0 1 1-2-2 2 2 0 0 1 2 2ZM9 16V6l8-2v10" /></BaseIcon>;
}
export function Users(props: IconProps) {
  return <BaseIcon {...props}><path d="M16 11a3 3 0 1 0-2.9-3.8M8 11a3 3 0 1 0-2.9-3.8M2.5 20a5.5 5.5 0 0 1 11 0M13 20a5 5 0 0 1 8 0" /></BaseIcon>;
}
export function Cross(props: IconProps) {
  return <BaseIcon {...props}><path d="M10 3h4v6h6v4h-6v8h-4v-8H4V9h6V3Z" /></BaseIcon>;
}
export function Calendar(props: IconProps) {
  return <BaseIcon {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></BaseIcon>;
}
export function Clock(props: IconProps) {
  return <BaseIcon {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v6l4 2" /></BaseIcon>;
}
export function Search(props: IconProps) {
  return <BaseIcon {...props}><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></BaseIcon>;
}
export function Filter(props: IconProps) {
  return <BaseIcon {...props}><path d="M4 6h16M7 12h10M10 18h4" /></BaseIcon>;
}
export function Lock(props: IconProps) {
  return <BaseIcon {...props}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></BaseIcon>;
}
export function Star(props: IconProps) {
  return <BaseIcon {...props}><path d="m12 3 2.7 5.6L21 9.5l-4.5 4.4 1.1 6.1L12 17l-5.6 3 1.1-6.1L3 9.5l6.3-.9L12 3Z" /></BaseIcon>;
}
export function Award(props: IconProps) {
  return <BaseIcon {...props}><circle cx="12" cy="8" r="5" /><path d="M9 13 7 21l5-3 5 3-2-8" /></BaseIcon>;
}
export function ChevronRight(props: IconProps) {
  return <BaseIcon {...props}><path d="m9 6 6 6-6 6" /></BaseIcon>;
}
export function FileText(props: IconProps) {
  return <BaseIcon {...props}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M14 17H8" /></BaseIcon>;
}
export function BarChart3(props: IconProps) {
  return <BaseIcon {...props}><path d="M3 3v18h18" /><path d="M18 17V9M13 17V5M8 17v-3" /></BaseIcon>;
}
export function Settings(props: IconProps) {
  return <BaseIcon {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></BaseIcon>;
}
export function ArrowLeft(props: IconProps) {
  return <BaseIcon {...props}><path d="m12 19-7-7 7-7M19 12H5" /></BaseIcon>;
}
