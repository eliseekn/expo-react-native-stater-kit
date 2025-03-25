build:
	eas build --platform all

deploy:
	eas submit --platform all

build-android:
	eas build --platform android

deploy-android:
	eas submit --platform android

build-ios:
	eas build --platform ios

deploy-ios:
	eas submit --platform ios
