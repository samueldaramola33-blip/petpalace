import React from 'react';

interface PetPalaceLogoProps {
  className?: string;
  variant?: 'full' | 'emblem';
  theme?: 'dark' | 'light' | 'original';
}

export const PetPalaceLogo: React.FC<PetPalaceLogoProps> = ({
  className = 'h-12 w-auto',
  variant = 'full',
  theme = 'original',
}) => {
  // Brand color from the actual logo
  const tealColor = '#22C7BE';
  const bgColor = theme === 'original' || theme === 'dark' ? '#000000' : 'transparent';

  if (variant === 'emblem') {
    // Standalone Doghouse Emblem
    return (
      <svg
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Pet Palace Logo Emblem"
      >
        {/* Roof Overhang */}
        <path
          d="M80 8L10 65H32L80 25L128 65H150L80 8Z"
          fill={tealColor}
        />
        {/* Main Doghouse Structure */}
        <path
          d="M26 62L80 18L134 62V132H26V62Z"
          fill={tealColor}
        />
        {/* Horizontal Plank Lines */}
        <line x1="28" y1="75" x2="132" y2="75" stroke="#000000" strokeWidth="2.5" />
        <line x1="28" y1="92" x2="132" y2="92" stroke="#000000" strokeWidth="2.5" />
        <line x1="28" y1="109" x2="132" y2="109" stroke="#000000" strokeWidth="2.5" />
        
        {/* Attic Round Medallion */}
        <circle cx="80" cy="52" r="16" stroke="#000000" strokeWidth="3" fill={tealColor} />
        {/* Paw inside Attic Medallion */}
        <ellipse cx="80" cy="55" rx="5.5" ry="4.5" fill="#000000" />
        <circle cx="73.5" cy="46" r="2.2" fill="#000000" />
        <circle cx="80" cy="43.5" r="2.2" fill="#000000" />
        <circle cx="86.5" cy="46" r="2.2" fill="#000000" />

        {/* Arched Doorway */}
        <path
          d="M60 132V98C60 87 70 82 80 82C90 82 100 87 100 98V132H60Z"
          fill="#000000"
        />
      </svg>
    );
  }

  // Full Logo matching petpalace-logo.jpeg with Doghouse, "Pet Palace", Paw Prints, and Phone Number
  return (
    <svg
      viewBox="0 0 320 340"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pet Palace Logo"
    >
      {/* Background if in original theme */}
      {bgColor !== 'transparent' && (
        <rect width="320" height="340" rx="16" fill={bgColor} />
      )}

      {/* --- 1. DOG HOUSE AT TOP --- */}
      <g transform="translate(80, 8)">
        {/* Roof Overhang */}
        <path
          d="M80 6L12 60H32L80 22L128 60H148L80 6Z"
          fill={tealColor}
        />
        {/* House Body */}
        <path
          d="M26 58L80 16L134 58V126H26V58Z"
          fill={tealColor}
        />
        {/* Wood Slat Grooves */}
        <line x1="28" y1="70" x2="132" y2="70" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="28" y1="86" x2="132" y2="86" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="28" y1="102" x2="132" y2="102" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

        {/* Round Medallion in Gable */}
        <circle cx="80" cy="48" r="16" stroke="#000000" strokeWidth="3" fill={tealColor} />
        {/* Paw Print in Gable */}
        <ellipse cx="80" cy="51" rx="5" ry="4" fill="#000000" />
        <circle cx="74" cy="43" r="2" fill="#000000" />
        <circle cx="80" cy="40.5" r="2" fill="#000000" />
        <circle cx="86" cy="43" r="2" fill="#000000" />

        {/* Arch Doorway */}
        <path
          d="M62 126V96C62 85 71 80 80 80C89 80 98 85 98 96V126H62Z"
          fill="#000000"
        />
      </g>

      {/* --- 2. FLOATING PAW PRINTS BESIDE "PET" --- */}
      {/* Upper-left paw print */}
      <g transform="translate(32, 160)">
        <ellipse cx="14" cy="16" rx="8" ry="6.5" fill={tealColor} />
        <circle cx="4" cy="6" r="3.2" fill={tealColor} />
        <circle cx="13" cy="2.5" r="3.2" fill={tealColor} />
        <circle cx="22" cy="7" r="3.2" fill={tealColor} />
      </g>

      {/* Upper-right paw print */}
      <g transform="translate(245, 142)">
        <ellipse cx="16" cy="18" rx="9" ry="7.5" fill={tealColor} />
        <circle cx="5" cy="7" r="3.6" fill={tealColor} />
        <circle cx="15" cy="3" r="3.6" fill={tealColor} />
        <circle cx="25" cy="8" r="3.6" fill={tealColor} />
      </g>

      {/* Lower-right paw print beside "Palace" */}
      <g transform="translate(268, 185)">
        <ellipse cx="16" cy="18" rx="9" ry="7.5" fill={tealColor} />
        <circle cx="5" cy="7" r="3.6" fill={tealColor} />
        <circle cx="15" cy="3" r="3.6" fill={tealColor} />
        <circle cx="25" cy="8" r="3.6" fill={tealColor} />
      </g>

      {/* --- 3. "Pet" TEXT --- */}
      <g transform="translate(0, 0)">
        {/* Custom styled "Pet" with paw in 'P' */}
        {/* Capital P */}
        <path
          d="M84 140H118C132 140 142 148 142 163C142 178 132 186 118 186H102V202H84V140ZM102 153V173H116C122 173 126 169 126 163C126 157 122 153 116 153H102Z"
          fill={tealColor}
        />
        {/* Paw cutout inside P counter */}
        <g transform="translate(104, 150)">
          <ellipse cx="10" cy="12" rx="4.5" ry="3.5" fill="#000000" />
          <circle cx="5" cy="5" r="1.8" fill="#000000" />
          <circle cx="10" cy="3" r="1.8" fill="#000000" />
          <circle cx="15" cy="5" r="1.8" fill="#000000" />
        </g>

        {/* Lowercase e */}
        <path
          d="M178 178C178 162 166 152 152 152C137 152 127 163 127 178C127 193 138 204 153 204C164 204 172 198 176 190L163 183C161 187 158 190 153 190C147 190 143 186 142 180H178V178ZM142 171C143 166 147 162 152 162C158 162 162 166 163 171H142Z"
          fill={tealColor}
          transform="translate(20, 0)"
        />

        {/* Lowercase t */}
        <path
          d="M194 145V155H184V167H194V193C194 199 197 203 204 203C208 203 211 202 213 201L211 188C210 188 209 189 207 189C205 189 204 188 204 184V167H214V155H204V145H194Z"
          fill={tealColor}
          transform="translate(26, 0)"
        />
      </g>

      {/* --- 4. "Palace" TEXT --- */}
      <g transform="translate(6, 75)">
        {/* P with paw counter */}
        <path
          d="M18 140H52C66 140 76 148 76 163C76 178 66 186 52 186H36V204H18V140ZM36 153V173H50C56 173 60 169 60 163C60 157 56 153 50 153H36Z"
          fill={tealColor}
        />
        {/* Paw in P counter */}
        <g transform="translate(38, 150)">
          <ellipse cx="10" cy="12" rx="4.5" ry="3.5" fill="#000000" />
          <circle cx="5" cy="5" r="1.8" fill="#000000" />
          <circle cx="10" cy="3" r="1.8" fill="#000000" />
          <circle cx="15" cy="5" r="1.8" fill="#000000" />
        </g>

        {/* a */}
        <path
          d="M106 178V166C106 158 100 152 91 152C83 152 77 157 74 163L85 169C86 166 88 164 91 164C94 164 96 166 96 169V172C93 172 89 172 85 173C75 175 70 181 70 189C70 198 77 204 86 204C92 204 96 200 99 196L100 203H109L107 178H106ZM96 188C96 193 91 195 87 195C83 195 81 192 81 189C81 184 85 182 91 181C93 181 95 181 96 181V188Z"
          fill={tealColor}
          transform="translate(10, 0)"
        />

        {/* l */}
        <path
          d="M125 140H138V203H125V140Z"
          fill={tealColor}
          transform="translate(15, 0)"
        />

        {/* a */}
        <path
          d="M165 178V166C165 158 159 152 150 152C142 152 136 157 133 163L144 169C145 166 147 164 150 164C153 164 155 166 155 169V172C152 172 148 172 144 173C134 175 129 181 129 189C129 198 136 204 145 204C151 204 155 200 158 196L159 203H168L166 178H165ZM155 188C155 193 150 195 146 195C142 195 140 192 140 189C140 184 144 182 150 181C152 181 154 181 155 181V188Z"
          fill={tealColor}
          transform="translate(15, 0)"
        />

        {/* c */}
        <path
          d="M208 165L197 170C195 166 193 164 189 164C183 164 179 169 179 178C179 187 183 192 189 192C193 192 196 189 198 185L209 191C205 199 198 204 188 204C173 204 163 193 163 178C163 163 173 152 188 152C197 152 204 157 208 165Z"
          fill={tealColor}
          transform="translate(20, 0)"
        />

        {/* e */}
        <path
          d="M246 178C246 162 234 152 220 152C205 152 195 163 195 178C195 193 206 204 221 204C232 204 240 198 244 190L231 183C229 187 226 190 221 190C215 190 211 186 210 180H246V178ZM210 171C211 166 215 162 220 162C226 162 230 166 231 171H210Z"
          fill={tealColor}
          transform="translate(22, 0)"
        />
      </g>

      {/* --- 5. PHONE NUMBER AT BOTTOM: "07065832371" --- */}
      <text
        x="160"
        y="318"
        textAnchor="middle"
        fill={tealColor}
        fontSize="34"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="3.5"
      >
        07065832371
      </text>
    </svg>
  );
};
