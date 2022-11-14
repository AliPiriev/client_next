import styles from "../../styles/commonComponents/FooterIcons.module.scss";
const FooterIcons = () => {
  return (
    <div className={styles.footerIcons}>
      <div className={styles.footerHoveredIcons}>
        <a className={styles.footerHovers} href="https://www.facebook.com/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5492 22V12.8777H16.6099L17.0691 9.32156H13.5492V7.05147C13.5492 6.0222 13.8338 5.32076 15.3115 5.32076L17.193 5.31999V2.13923C16.8676 2.09695 15.7507 2 14.4507 2C11.7361 2 9.87764 3.65697 9.87764 6.69927V9.32156H6.80762V12.8777H9.87764V22H13.5492Z"
              fill="#0500FF"
            />
          </svg>
        </a>
        <a href="https://twitter.com/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 5.79875C21.2563 6.125 20.4637 6.34125 19.6375 6.44625C20.4875 5.93875 21.1363 5.14125 21.4412 4.18C20.6488 4.6525 19.7738 4.98625 18.8412 5.1725C18.0887 4.37125 17.0162 3.875 15.8462 3.875C13.5763 3.875 11.7487 5.7175 11.7487 7.97625C11.7487 8.30125 11.7762 8.61375 11.8438 8.91125C8.435 8.745 5.41875 7.11125 3.3925 4.6225C3.03875 5.23625 2.83125 5.93875 2.83125 6.695C2.83125 8.115 3.5625 9.37375 4.6525 10.1025C3.99375 10.09 3.3475 9.89875 2.8 9.5975C2.8 9.61 2.8 9.62625 2.8 9.6425C2.8 11.635 4.22125 13.29 6.085 13.6712C5.75125 13.7625 5.3875 13.8062 5.01 13.8062C4.7475 13.8062 4.4825 13.7913 4.23375 13.7362C4.765 15.36 6.2725 16.5538 8.065 16.5925C6.67 17.6838 4.89875 18.3412 2.98125 18.3412C2.645 18.3412 2.3225 18.3263 2 18.285C3.81625 19.4563 5.96875 20.125 8.29 20.125C15.835 20.125 19.96 13.875 19.96 8.4575C19.96 8.27625 19.9538 8.10125 19.945 7.9275C20.7588 7.35 21.4425 6.62875 22 5.79875Z"
              fill="#0500FF"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3938_1374)">
              <path
                d="M21.9951 22.0009V22H22.0001V14.665C22.0001 11.0767 21.2276 8.3125 17.0326 8.3125C15.0159 8.3125 13.6626 9.41917 13.1101 10.4683H13.0517V8.6475H9.07422V22H13.2159V15.3883C13.2159 13.6475 13.5459 11.9642 15.7017 11.9642C17.8259 11.9642 17.8576 13.9508 17.8576 15.5V22.0009H21.9951Z"
                fill="#0500FF"
              />
              <path
                d="M2.33008 8.64844H6.47675V22.0009H2.33008V8.64844Z"
                fill="#0500FF"
              />
              <path
                d="M4.40167 2C3.07583 2 2 3.07583 2 4.40167C2 5.7275 3.07583 6.82583 4.40167 6.82583C5.7275 6.82583 6.80333 5.7275 6.80333 4.40167C6.8025 3.07583 5.72667 2 4.40167 2V2Z"
                fill="#0500FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_3938_1374">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(2 2)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://github.com/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9987 2C6.4775 2 2 6.59056 2 12.2534C2 16.7827 4.865 20.6252 8.84 21.9822C9.34 22.0767 9.5225 21.7601 9.5225 21.4882C9.5225 21.2444 9.51375 20.5997 9.50875 19.7444C6.7275 20.3635 6.14 18.3695 6.14 18.3695C5.68625 17.1849 5.03 16.8695 5.03 16.8695C4.12125 16.2338 5.0975 16.2466 5.0975 16.2466C6.10125 16.3193 6.62875 17.3036 6.62875 17.3036C7.52125 18.8699 8.97 18.418 9.54 18.155C9.63 17.4925 9.88875 17.0406 10.175 16.784C7.955 16.5249 5.62 15.6453 5.62 11.7173C5.62 10.5977 6.01 9.68242 6.65 8.96499C6.54625 8.70584 6.20375 7.66288 6.7475 6.25227C6.7475 6.25227 7.5875 5.97653 9.4975 7.30289C10.295 7.07566 11.15 6.96204 12.0013 6.95821C12.85 6.96332 13.7062 7.07566 14.505 7.30417C16.4137 5.97781 17.2525 6.25355 17.2525 6.25355C17.7975 7.66544 17.455 8.70712 17.3525 8.96627C17.9937 9.6837 18.38 10.599 18.38 11.7186C18.38 15.6568 16.0425 16.5236 13.815 16.7776C14.1737 17.0942 14.4937 17.7197 14.4937 18.6759C14.4937 20.0469 14.4812 21.1524 14.4812 21.4882C14.4812 21.7626 14.6613 22.0818 15.1687 21.9809C19.1375 20.6227 22 16.7815 22 12.2534C22 6.59056 17.5225 2 11.9987 2Z"
              fill="#0500FF"
            />
          </svg>
        </a>
      </div>
      <div className={styles.footerSocialIcons}>
        <a href="https://www.facebook.com/">
          <svg
            className={styles.footerIconsSvg}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8594 24V13.0533H17.5323L18.0833 8.78588H13.8594V6.06176C13.8594 4.82664 14.201 3.98492 15.9742 3.98492L18.232 3.98399V0.167076C17.8415 0.116334 16.5012 0 14.9412 0C11.6837 0 9.45356 1.98836 9.45356 5.63912V8.78588H5.76953V13.0533H9.45356V24H13.8594Z"
              fill="white"
            />
          </svg>
        </a>
        <a href="https://twitter.com/">
          <svg
            className={styles.footerIconsSvg}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 5.79875C21.2562 6.125 20.4637 6.34125 19.6375 6.44625C20.4875 5.93875 21.1363 5.14125 21.4413 4.18C20.6488 4.6525 19.7737 4.98625 18.8412 5.1725C18.0887 4.37125 17.0162 3.875 15.8462 3.875C13.5762 3.875 11.7487 5.7175 11.7487 7.97625C11.7487 8.30125 11.7762 8.61375 11.8438 8.91125C8.435 8.745 5.41875 7.11125 3.3925 4.6225C3.03875 5.23625 2.83125 5.93875 2.83125 6.695C2.83125 8.115 3.5625 9.37375 4.6525 10.1025C3.99375 10.09 3.3475 9.89875 2.8 9.5975C2.8 9.61 2.8 9.62625 2.8 9.6425C2.8 11.635 4.22125 13.29 6.085 13.6712C5.75125 13.7625 5.3875 13.8062 5.01 13.8062C4.7475 13.8062 4.4825 13.7912 4.23375 13.7362C4.765 15.36 6.2725 16.5537 8.065 16.5925C6.67 17.6837 4.89875 18.3412 2.98125 18.3412C2.645 18.3412 2.3225 18.3262 2 18.285C3.81625 19.4562 5.96875 20.125 8.29 20.125C15.835 20.125 19.96 13.875 19.96 8.4575C19.96 8.27625 19.9537 8.10125 19.945 7.9275C20.7587 7.35 21.4425 6.62875 22 5.79875Z"
              fill="white"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/">
          <svg
            className={styles.footerIconsSvg}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2990_1200)">
              <path
                d="M21.9951 22.0009V22H22.0001V14.665C22.0001 11.0767 21.2276 8.3125 17.0326 8.3125C15.0159 8.3125 13.6626 9.41917 13.1101 10.4683H13.0517V8.6475H9.07422V22H13.2159V15.3883C13.2159 13.6475 13.5459 11.9642 15.7017 11.9642C17.8259 11.9642 17.8576 13.9508 17.8576 15.5V22.0009H21.9951Z"
                fill="white"
              />
              <path
                d="M2.33008 8.64844H6.47675V22.0009H2.33008V8.64844Z"
                fill="white"
              />
              <path
                d="M4.40167 2C3.07583 2 2 3.07583 2 4.40167C2 5.7275 3.07583 6.82583 4.40167 6.82583C5.7275 6.82583 6.80333 5.7275 6.80333 4.40167C6.8025 3.07583 5.72667 2 4.40167 2V2Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2990_1200">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(2 2)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://github.com/">
          <svg
            className={styles.footerIconsSvg}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9987 2C6.4775 2 2 6.59056 2 12.2534C2 16.7827 4.865 20.6252 8.84 21.9822C9.34 22.0767 9.5225 21.7601 9.5225 21.4882C9.5225 21.2444 9.51375 20.5997 9.50875 19.7444C6.7275 20.3635 6.14 18.3695 6.14 18.3695C5.68625 17.1849 5.03 16.8695 5.03 16.8695C4.12125 16.2338 5.0975 16.2466 5.0975 16.2466C6.10125 16.3193 6.62875 17.3036 6.62875 17.3036C7.52125 18.8699 8.97 18.418 9.54 18.155C9.63 17.4925 9.88875 17.0406 10.175 16.784C7.955 16.5249 5.62 15.6453 5.62 11.7173C5.62 10.5977 6.01 9.68242 6.65 8.96499C6.54625 8.70584 6.20375 7.66288 6.7475 6.25227C6.7475 6.25227 7.5875 5.97653 9.4975 7.30289C10.295 7.07566 11.15 6.96204 12.0013 6.95821C12.85 6.96332 13.7062 7.07566 14.505 7.30417C16.4137 5.97781 17.2525 6.25355 17.2525 6.25355C17.7975 7.66544 17.455 8.70712 17.3525 8.96627C17.9937 9.6837 18.38 10.599 18.38 11.7186C18.38 15.6568 16.0425 16.5236 13.815 16.7776C14.1737 17.0942 14.4937 17.7197 14.4937 18.6759C14.4937 20.0469 14.4812 21.1524 14.4812 21.4882C14.4812 21.7626 14.6613 22.0818 15.1687 21.9809C19.1375 20.6227 22 16.7815 22 12.2534C22 6.59056 17.5225 2 11.9987 2Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FooterIcons;
