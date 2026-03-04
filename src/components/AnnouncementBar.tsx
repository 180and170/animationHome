interface AnnouncementBarProps {
  message: string;
  link?: string;
  linkText?: string;
}

export default function AnnouncementBar({ message, link, linkText }: AnnouncementBarProps) {
  const content = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span className="header-announcement-icon">🚀</span>
      <span className="header-announcement-message">
        {message}
        {linkText && (
          <>
            {' '}
            <span className="header-announcement-link-text">{linkText}</span>
            {' '}
            <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px' }}>→</span>
          </>
        )}
      </span>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="header-announcement-bar landing-bar">
        <div className="header-announcement-content">{content}</div>
      </a>
    );
  }

  return (
    <div className="header-announcement-bar">
      <div className="header-announcement-content">{content}</div>
    </div>
  );
}
