use ring::rand::{SecureRandom, SystemRandom};
use ring::digest;
use ring::pbkdf2;

fn generate_salt()  -> [u8; 16] {
    let rng = SystemRandom::new();
    let mut salt = [0u8; 16];
    rng.fill(&mut salt).unwrap();

    salt
}

fn main() {
    let password = "Password&123";
    let salt = generate_salt();
    let mut pbkdf2_hash = [0u8; digest::SHA256_OUTPUT_LEN];

    pbkdf2::derive(
        pbkdf2::PBKDF2_HMAC_SHA256,
        std::num::NonZeroU32::new(10000).unwrap(),
        &salt,
        password.as_bytes(),
        &mut pbkdf2_hash
    );

    let password_hash = base64::encode(pbkdf2_hash);
    println!("暗号化されたパスワード: {}", password_hash);

    // パスワードの復号化と検証
    let input_password = "Password&123";
    let input_salt = &salt;

    let mut input_pbkdf2_hash = [0u8; digest::SHA256_OUTPUT_LEN];
    pbkdf2::derive(
        pbkdf2::PBKDF2_HMAC_SHA256,
        std::num::NonZeroU32::new(10000).unwrap(),
        input_salt,
        input_password.as_bytes(),
        &mut input_pbkdf2_hash
    );

    let input_password_hash = base64::encode(input_pbkdf2_hash);
    println!("入力されたパスワードの暗号化結果: {}", input_password_hash);

    if input_password_hash == password_hash {
        println!("パスワードが一致しました。");
    } else {
        println!("パスワードが一致しません。");
    }
}
